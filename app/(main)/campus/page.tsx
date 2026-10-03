"use client"
import { useEffect, useState, useRef } from "react"
import { createClient } from "@/lib/supabase/client"
import {
  Heart, MessageSquare, Send, Users, CheckCircle,
  Loader2, Globe, Lock, ChevronDown, ChevronUp, X
} from "lucide-react"
import { toast } from "sonner"
import Link from "next/link"

type Post = {
  id: string; content: string; post_type: string
  likes_count: number; comments_count: number
  created_at: string; author_id: string
  liked?: boolean; authorName?: string; authorInitial?: string
}
type Comment = { id: string; content: string; created_at: string; author_id: string; authorName?: string }
type Group = { id: string; name: string; description: string; icon: string; member_count: number; is_official: boolean; joined?: boolean }

const POST_TYPES: Record<string, { label: string; color: string }> = {
  post: { label: "Post", color: "" },
  resource_share: { label: "Resource", color: "text-green-400" },
  question: { label: "Question", color: "text-blue-400" },
  achievement: { label: "Achievement", color: "text-yellow-400" },
}

function timeAgo(d: string) {
  const diff = Date.now() - new Date(d).getTime()
  const m = Math.floor(diff / 60000)
  if (m < 1) return "just now"
  if (m < 60) return `${m}m ago`
  const h = Math.floor(m / 60)
  if (h < 24) return `${h}h ago`
  return `${Math.floor(h / 24)}d ago`
}

export default function CampusPage() {
  const supabase = createClient()
  const [posts, setPosts] = useState<Post[]>([])
  const [groups, setGroups] = useState<Group[]>([])
  const [newPost, setNewPost] = useState("")
  const [posting, setPosting] = useState(false)
  const [userId, setUserId] = useState<string | null>(null)
  const [myName, setMyName] = useState("You")
  const [tab, setTab] = useState<"feed" | "groups">("feed")
  const [loading, setLoading] = useState(true)
  const [postType, setPostType] = useState("post")
  const [expandedComments, setExpandedComments] = useState<Set<string>>(new Set())
  const [comments, setComments] = useState<Record<string, Comment[]>>({})
  const [commentInputs, setCommentInputs] = useState<Record<string, string>>({})
  const [submittingComment, setSubmittingComment] = useState<string | null>(null)

  useEffect(() => {
    const init = async () => {
      const { data: { user } } = await supabase.auth.getUser()
      if (user) {
        setUserId(user.id)
        const name = user.user_metadata?.full_name || "You"
        setMyName(name)
      }

      const [{ data: postsData }, { data: groupsData }, { data: likes }, { data: memberships }, { data: profiles }] = await Promise.all([
        supabase.from("posts").select("*").order("created_at", { ascending: false }).limit(30),
        supabase.from("groups").select("*").order("member_count", { ascending: false }),
        user ? supabase.from("post_likes").select("post_id").eq("user_id", user.id) : Promise.resolve({ data: [] }),
        user ? supabase.from("group_members").select("group_id").eq("user_id", user.id) : Promise.resolve({ data: [] }),
        supabase.from("student_profiles").select("user_id, full_name"),
      ])

      const likedIds = new Set((likes || []).map((l: any) => l.post_id))
      const joinedIds = new Set((memberships || []).map((m: any) => m.group_id))
      const nameMap: Record<string, string> = {}
      ;(profiles || []).forEach((p: any) => { nameMap[p.user_id] = p.full_name })

      setPosts((postsData || []).map((p: any) => ({
        ...p,
        liked: likedIds.has(p.id),
        authorName: p.author_id === user?.id ? (user?.user_metadata?.full_name || "You") : (nameMap[p.author_id] || "Fellow Student"),
        authorInitial: (p.author_id === user?.id ? (user?.user_metadata?.full_name || "Y") : (nameMap[p.author_id] || "S"))[0].toUpperCase()
      })))
      setGroups((groupsData || []).map((g: any) => ({ ...g, joined: joinedIds.has(g.id) })))
      setLoading(false)
    }
    init()
  }, [])

  const handlePost = async () => {
    if (!newPost.trim() || !userId) return
    setPosting(true)
    const { data, error } = await supabase.from("posts")
      .insert({ author_id: userId, content: newPost.trim(), post_type: postType })
      .select().single()
    if (!error && data) {
      setPosts(p => [{
        ...data, liked: false,
        authorName: myName, authorInitial: myName[0].toUpperCase()
      }, ...p])
      setNewPost("")
      toast.success("Posted!")
    } else {
      toast.error("Failed to post")
    }
    setPosting(false)
  }

  const handleLike = async (postId: string, liked: boolean) => {
    if (!userId) return
    setPosts(ps => ps.map(p => p.id === postId
      ? { ...p, liked: !liked, likes_count: liked ? p.likes_count - 1 : p.likes_count + 1 }
      : p))
    if (liked) await supabase.from("post_likes").delete().eq("post_id", postId).eq("user_id", userId)
    else await supabase.from("post_likes").insert({ post_id: postId, user_id: userId })
  }

  const handleJoinGroup = async (groupId: string, joined: boolean) => {
    if (!userId) return
    setGroups(gs => gs.map(g => g.id === groupId
      ? { ...g, joined: !joined, member_count: joined ? g.member_count - 1 : g.member_count + 1 }
      : g))
    if (joined) {
      await supabase.from("group_members").delete().eq("group_id", groupId).eq("user_id", userId)
      toast.success("Left group")
    } else {
      await supabase.from("group_members").insert({ group_id: groupId, user_id: userId })
      toast.success("Joined!")
    }
  }

  const toggleComments = async (postId: string) => {
    const next = new Set(expandedComments)
    if (next.has(postId)) {
      next.delete(postId)
    } else {
      next.add(postId)
      if (!comments[postId]) {
        const { data, error } = await supabase.from("post_comments")
          .select("*")
          .eq("post_id", postId)
          .order("created_at", { ascending: true })
        if (!error && data) {
          // Get author names
          const authorIds = [...new Set(data.map((c: any) => c.author_id))]
          const { data: profiles } = await supabase.from("student_profiles")
            .select("user_id, full_name").in("user_id", authorIds)
          const nameMap: Record<string, string> = {}
          ;(profiles || []).forEach((p: any) => { nameMap[p.user_id] = p.full_name })

          setComments(prev => ({
            ...prev,
            [postId]: data.map((c: any) => ({
              ...c,
              authorName: c.author_id === userId ? myName : (nameMap[c.author_id] || "Student")
            }))
          }))
        }
      }
    }
    setExpandedComments(next)
  }

  const submitComment = async (postId: string) => {
    const content = commentInputs[postId]?.trim()
    if (!content || !userId) return
    setSubmittingComment(postId)
    const { data, error } = await supabase.from("post_comments")
      .insert({ post_id: postId, author_id: userId, content })
      .select().single()
    if (!error && data) {
      setComments(prev => ({
        ...prev,
        [postId]: [...(prev[postId] || []), { ...data, authorName: myName }]
      }))
      setPosts(ps => ps.map(p => p.id === postId ? { ...p, comments_count: p.comments_count + 1 } : p))
      setCommentInputs(prev => ({ ...prev, [postId]: "" }))
    }
    setSubmittingComment(null)
  }

  return (
    <div className="max-w-5xl mx-auto space-y-5 pb-12">
      <div>
        <h1 className="text-3xl font-display font-bold text-white">Campus</h1>
        <p className="text-gray-400 mt-1 text-sm">Connect with students across your faculty and beyond.</p>
      </div>

      {/* Tabs */}
      <div className="flex border-b border-[#1f1f1f]">
        {(["feed", "groups"] as const).map(t => (
          <button key={t} onClick={() => setTab(t)}
            className={`px-5 py-3 text-sm font-semibold capitalize transition-colors border-b-2 -mb-px ${tab === t ? "border-brand text-white" : "border-transparent text-gray-500 hover:text-white"}`}>
            {t === "feed" ? "📢 Feed" : "👥 Groups"}
          </button>
        ))}
      </div>

      {tab === "feed" && (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 space-y-4">

            {/* Compose */}
            <div className="bg-[#111] border border-[#1f1f1f] rounded-xl p-4 space-y-3">
              <div className="flex items-start gap-3">
                <div className="w-9 h-9 rounded-full bg-brand/20 flex items-center justify-center text-brand text-xs font-bold flex-shrink-0">
                  {myName[0]?.toUpperCase() || "Y"}
                </div>
                <textarea value={newPost} onChange={e => setNewPost(e.target.value)}
                  onKeyDown={e => { if (e.key === "Enter" && e.ctrlKey) handlePost() }}
                  placeholder="Share something with the campus... (Ctrl+Enter to post)"
                  className="flex-1 bg-transparent text-white text-sm outline-none resize-none placeholder:text-gray-600 min-h-[70px]" />
              </div>
              <div className="flex items-center justify-between pt-2 border-t border-[#1a1a1a]">
                <div className="flex gap-1">
                  {[
                    { val: "post", label: "Post" },
                    { val: "question", label: "❓ Question" },
                    { val: "resource_share", label: "📎 Resource" },
                  ].map(t => (
                    <button key={t.val} onClick={() => setPostType(t.val)}
                      className={`text-[10px] font-bold px-2.5 py-1 rounded-full border transition-colors ${postType === t.val ? "bg-brand text-white border-brand" : "text-gray-500 border-[#333] hover:text-white"}`}>
                      {t.label}
                    </button>
                  ))}
                </div>
                <button onClick={handlePost} disabled={posting || !newPost.trim()}
                  className="flex items-center gap-2 bg-brand hover:bg-red-700 text-white px-4 py-2 rounded-lg text-xs font-bold transition-colors disabled:opacity-50">
                  {posting ? <Loader2 size={14} className="animate-spin" /> : <Send size={14} />} Post
                </button>
              </div>
            </div>

            {/* Feed */}
            {loading ? (
              <div className="flex justify-center py-12"><Loader2 size={24} className="animate-spin text-brand" /></div>
            ) : posts.length === 0 ? (
              <div className="text-center py-16 space-y-3">
                <p className="text-5xl">📢</p>
                <p className="text-white font-bold">No posts yet</p>
                <p className="text-gray-500 text-sm">Be the first to post something!</p>
              </div>
            ) : (
              posts.map(post => (
                <div key={post.id} className="bg-[#111] border border-[#1f1f1f] rounded-xl overflow-hidden">
                  <div className="p-5">
                    <div className="flex items-start gap-3 mb-3">
                      <div className="w-9 h-9 rounded-full bg-brand/20 flex items-center justify-center text-brand text-xs font-bold flex-shrink-0">
                        {post.authorInitial || "S"}
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 flex-wrap">
                          <p className="text-sm font-semibold text-white">{post.authorName}</p>
                          {POST_TYPES[post.post_type]?.label !== "Post" && (
                            <span className={`text-[10px] font-bold uppercase tracking-wider ${POST_TYPES[post.post_type]?.color}`}>
                              {POST_TYPES[post.post_type]?.label}
                            </span>
                          )}
                        </div>
                        <p className="text-xs text-gray-500">{timeAgo(post.created_at)}</p>
                      </div>
                    </div>
                    <p className="text-sm text-gray-200 leading-relaxed whitespace-pre-wrap">{post.content}</p>
                    <div className="flex items-center gap-4 mt-4 pt-3 border-t border-[#1a1a1a]">
                      <button onClick={() => handleLike(post.id, !!post.liked)}
                        className={`flex items-center gap-1.5 text-sm transition-colors ${post.liked ? "text-brand" : "text-gray-500 hover:text-brand"}`}>
                        <Heart size={15} fill={post.liked ? "currentColor" : "none"} />
                        <span className="text-xs font-semibold">{post.likes_count}</span>
                      </button>
                      <button onClick={() => toggleComments(post.id)}
                        className="flex items-center gap-1.5 text-sm text-gray-500 hover:text-white transition-colors">
                        <MessageSquare size={15} />
                        <span className="text-xs font-semibold">{post.comments_count}</span>
                        {expandedComments.has(post.id) ? <ChevronUp size={12} /> : <ChevronDown size={12} />}
                      </button>
                    </div>
                  </div>

                  {/* Comments */}
                  {expandedComments.has(post.id) && (
                    <div className="border-t border-[#1a1a1a] bg-[#0a0a0a] px-5 py-4 space-y-3">
                      {(comments[post.id] || []).map(c => (
                        <div key={c.id} className="flex items-start gap-2">
                          <div className="w-6 h-6 rounded-full bg-[#222] flex items-center justify-center text-[10px] font-bold text-gray-400 flex-shrink-0">
                            {c.authorName?.[0]?.toUpperCase() || "S"}
                          </div>
                          <div className="bg-[#111] border border-[#1f1f1f] rounded-xl px-3 py-2 flex-1">
                            <p className="text-xs font-semibold text-white mb-0.5">{c.authorName}</p>
                            <p className="text-xs text-gray-300 leading-relaxed">{c.content}</p>
                          </div>
                        </div>
                      ))}
                      {(comments[post.id] || []).length === 0 && (
                        <p className="text-xs text-gray-600 text-center py-1">No comments yet — be the first!</p>
                      )}
                      <div className="flex gap-2 pt-1">
                        <input
                          value={commentInputs[post.id] || ""}
                          onChange={e => setCommentInputs(prev => ({ ...prev, [post.id]: e.target.value }))}
                          onKeyDown={e => { if (e.key === "Enter") submitComment(post.id) }}
                          placeholder="Write a comment..."
                          className="flex-1 bg-[#111] border border-[#333] focus:border-brand rounded-lg px-3 py-2 text-xs text-white outline-none transition-colors"
                        />
                        <button onClick={() => submitComment(post.id)}
                          disabled={!commentInputs[post.id]?.trim() || submittingComment === post.id}
                          className="p-2 bg-brand text-white rounded-lg hover:bg-red-700 transition-colors disabled:opacity-50">
                          {submittingComment === post.id
                            ? <Loader2 size={13} className="animate-spin" />
                            : <Send size={13} />}
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              ))
            )}
          </div>

          {/* Sidebar */}
          <div className="space-y-4">
            <div className="bg-[#111] border border-[#1f1f1f] rounded-xl p-4">
              <h2 className="font-bold text-white text-sm mb-3">📌 Groups to Join</h2>
              <div className="space-y-3">
                {groups.slice(0, 5).map(g => (
                  <div key={g.id} className="flex items-center justify-between gap-2">
                    <div className="flex items-center gap-2 min-w-0">
                      <span className="text-xl flex-shrink-0">{g.icon}</span>
                      <div className="min-w-0">
                        <p className="text-xs font-semibold text-white truncate">{g.name}</p>
                        <p className="text-[10px] text-gray-600">{g.member_count} members</p>
                      </div>
                    </div>
                    <button onClick={() => handleJoinGroup(g.id, !!g.joined)}
                      className={`text-[10px] font-bold px-2.5 py-1.5 rounded-lg transition-colors flex-shrink-0 ${g.joined ? "bg-brand/10 text-brand border border-brand/20" : "bg-white text-black hover:bg-gray-200"}`}>
                      {g.joined ? "✓" : "Join"}
                    </button>
                  </div>
                ))}
              </div>
              <button onClick={() => setTab("groups")} className="text-xs text-brand hover:text-white font-semibold mt-3 transition-colors block">
                View all groups →
              </button>
            </div>

            <div className="bg-[#0f0a0a] border border-brand/10 rounded-xl p-4">
              <p className="text-xs font-bold text-brand uppercase tracking-widest mb-2">Campus Rules</p>
              <ul className="space-y-1.5">
                {["Be respectful to fellow students", "No plagiarism or exam misconduct", "Cite sources when sharing resources", "Support each other's learning"].map(r => (
                  <li key={r} className="text-xs text-gray-500 flex items-start gap-1.5">
                    <span className="text-brand mt-0.5 flex-shrink-0">•</span> {r}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      )}

      {tab === "groups" && (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {loading
            ? <div className="col-span-2 flex justify-center py-12"><Loader2 size={24} className="animate-spin text-brand" /></div>
            : groups.length === 0
              ? <div className="col-span-2 text-center py-12 text-gray-500">No groups yet. Groups are created by the admin.</div>
              : groups.map(g => (
                <div key={g.id} className="bg-[#111] border border-[#1f1f1f] hover:border-[#333] rounded-xl p-5 transition-all">
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex items-start gap-3">
                      <span className="text-3xl">{g.icon}</span>
                      <div>
                        <div className="flex items-center gap-2">
                          <h3 className="font-bold text-white text-sm">{g.name}</h3>
                          {g.is_official && <CheckCircle size={13} className="text-brand" />}
                        </div>
                        <p className="text-xs text-gray-500 mt-1 leading-relaxed">{g.description}</p>
                        <p className="text-xs text-gray-600 mt-1.5">
                          <Users size={10} className="inline mr-1" />{g.member_count} members
                        </p>
                      </div>
                    </div>
                    <button onClick={() => handleJoinGroup(g.id, !!g.joined)}
                      className={`text-xs font-bold px-4 py-2 rounded-lg transition-colors flex-shrink-0 mt-1 ${g.joined ? "bg-brand/10 text-brand border border-brand/20 hover:bg-brand/20" : "bg-white text-black hover:bg-gray-200"}`}>
                      {g.joined ? "Joined ✓" : "Join"}
                    </button>
                  </div>
                </div>
              ))
          }
        </div>
      )}
    </div>
  )
}