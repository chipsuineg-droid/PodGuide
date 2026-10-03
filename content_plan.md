# Content Management Plan

To handle a massive library of materials, we need to separate the **files** (PDFs, Videos) from the **structured data** (MCQs). Here is the proposed architecture using your existing Supabase backend.

## 1. Storage Strategy

### Files (Notes, Slides, Textbooks, Videos, Past Papers)
These are large binary files.
* **Storage:** Supabase Storage Buckets (e.g., a bucket named `materials`).
* **Database:** A new `materials` table in your database that stores the metadata:
  * `title` (e.g., "Anatomy Year 1 Notes")
  * `file_url` (the link to the file in the bucket)
  * `type` (pdf, video, etc.)
  * `programme` (e.g., MBChB)
  * `level` (e.g., Year 1)
  * `subject` (e.g., Anatomy)

### Structured Data (MCQs, Flashcards)
These are text-based questions and answers.
* **Database:** These will go directly into the `questions`, `question_options`, and `flashcards` tables we already created.
* **Format:** You will organize these in Excel or CSV files.

## 2. How to Upload (The Options)

Depending on how technical you want to get and how often you will be uploading, we can take one of three approaches:

### Option A: The "No-Code" Approach (Fastest to start)
You do everything directly through the **Supabase Dashboard**.
1. Create a Storage Bucket in Supabase.
2. Drag and drop your PDFs and Videos into the bucket.
3. Copy the links and paste them into the `materials` table.
4. Format your MCQs in an Excel/CSV file and use Supabase's "Import CSV" button to bulk-load them into the database.

### Option B: The "Admin Dashboard" Approach (Best long-term)
We build a dedicated, hidden `/admin` page inside PodGuide.
1. Only your account (marked as `is_admin = true`) can access it.
2. We build a clean user interface where you can upload a PDF, select the Year and Programme from a dropdown, and click "Save".
3. We build a CSV uploader tool right in the browser that automatically maps your MCQ spreadsheets to the database.

### Option C: The "Bulk Upload Script" (Best for a massive one-time dump)
You organize all your files in a folder on your laptop (e.g., `Year 1 / Anatomy / Notes / ...`).
1. I write a custom Node.js script.
2. You run the script once.
3. The script scans your entire folder structure, uploads all the PDFs and Videos to Supabase, and automatically tags them with the correct Year and Subject based on the folder names.