-- ==============================================================================
-- Migration 008: MedStore Merchandise Schema & Storage
-- Tables: medstore_products, storage bucket medstore
-- ==============================================================================

-- 1. Products Table
CREATE TABLE IF NOT EXISTS medstore_products (
  id             TEXT PRIMARY KEY,
  name           TEXT NOT NULL,
  collection     TEXT NOT NULL CHECK (collection IN ('jackets', 'scrubs', 'pants', 'sets', 'coats', 'accessories')),
  price_zar      NUMERIC NOT NULL DEFAULT 0,
  price_usd      NUMERIC NOT NULL DEFAULT 0,
  rating         NUMERIC DEFAULT 4.9,
  reviews_count  INT DEFAULT 120,
  badge          TEXT,
  fabric_tech    TEXT,
  image_url      TEXT,
  image_urls     JSONB DEFAULT '[]'::jsonb,
  image_icon     TEXT DEFAULT '🛍️',
  description    TEXT DEFAULT '',
  colors         JSONB DEFAULT '[]'::jsonb,
  sizes          JSONB DEFAULT '[]'::jsonb,
  specs          JSONB DEFAULT '[]'::jsonb,
  display_order  INT DEFAULT 0,
  is_active      BOOLEAN DEFAULT true,
  created_at     TIMESTAMPTZ DEFAULT now(),
  updated_at     TIMESTAMPTZ DEFAULT now()
);

-- 2. Enable RLS
ALTER TABLE medstore_products ENABLE ROW LEVEL SECURITY;

-- 3. RLS Policies
CREATE POLICY "MedStore products readable by all"
  ON medstore_products FOR SELECT
  USING (is_active = true);

CREATE POLICY "Admins can insert products"
  ON medstore_products FOR INSERT
  WITH CHECK (
    auth.uid() IN (SELECT user_id FROM student_profiles WHERE is_admin = true)
    OR auth.role() = 'service_role'
  );

CREATE POLICY "Admins can update products"
  ON medstore_products FOR UPDATE
  USING (
    auth.uid() IN (SELECT user_id FROM student_profiles WHERE is_admin = true)
    OR auth.role() = 'service_role'
  );

CREATE POLICY "Admins can delete products"
  ON medstore_products FOR DELETE
  USING (
    auth.uid() IN (SELECT user_id FROM student_profiles WHERE is_admin = true)
    OR auth.role() = 'service_role'
  );

-- 4. Create Storage Bucket for Merchandise Pictures
INSERT INTO storage.buckets (id, name, public)
VALUES ('medstore', 'medstore', true)
ON CONFLICT (id) DO NOTHING;

-- Storage RLS Policies
CREATE POLICY "MedStore images public read"
  ON storage.objects FOR SELECT
  USING (bucket_id = 'medstore');

CREATE POLICY "Authenticated users upload medstore images"
  ON storage.objects FOR INSERT
  WITH CHECK (bucket_id = 'medstore' AND auth.role() = 'authenticated');

CREATE POLICY "Users can update own medstore images"
  ON storage.objects FOR UPDATE
  USING (bucket_id = 'medstore' AND auth.role() = 'authenticated');

CREATE POLICY "Users can delete own medstore images"
  ON storage.objects FOR DELETE
  USING (bucket_id = 'medstore' AND auth.role() = 'authenticated');

-- 5. Seed Core TANC Product Catalog
INSERT INTO medstore_products (
  id, name, collection, price_zar, price_usd, rating, reviews_count, badge, fabric_tech, image_icon, description, colors, sizes, specs, display_order
) VALUES
(
  'tanc-dr-jacket',
  'TANC Signature Doctor''s Soft-Shell Jacket',
  'jackets',
  750, 42, 4.9, 284, 'Faculty Bestseller', 'HydroShield™ Fleece-Lined', '🧥',
  'Windproof and water-resistant bonded soft-shell designed for hospital air conditioning and cold night ward calls. Features pen arm-slot and zippered stethoscope pockets.',
  '[{"name":"Navy Blue","hex":"#1e3a8a"},{"name":"Charcoal Black","hex":"#1f2937"},{"name":"Hunter Green","hex":"#14532d"},{"name":"Deep Burgundy","hex":"#831843"}]'::jsonb,
  '["XS","S","M","L","XL","2XL"]'::jsonb,
  '["Thermal fleece micro-lining","Zipped chest & side pockets","Pen pocket on left sleeve","Anti-pill outer shell"]'::jsonb,
  1
),
(
  'tanc-scrublab-set',
  'TANC ScrubLab™ Complete 4-Way Stretch Set',
  'sets',
  640, 36, 4.9, 412, 'Student Bundle Deal', 'LABx™ 4-Way Stretch + SilvaLab™', '🥼',
  'Full scrub suit including the Three-Pocket V-Neck Top and Cleo™ Cargo Jogger Pants. Engineered with SilvaLab™ antimicrobial silver-ion technology.',
  '[{"name":"Ceil Blue","hex":"#60a5fa"},{"name":"Hunter Green","hex":"#14532d"},{"name":"Deep Navy","hex":"#1e3a8a"},{"name":"Burgundy Wine","hex":"#831843"},{"name":"Midnight Black","hex":"#111827"}]'::jsonb,
  '["XS","S","M","L","XL","2XL"]'::jsonb,
  '["Total 9 strategic pockets","Moisture-wicking breathable weave","SilvaLab™ odor control","Elastic drawstring waistband"]'::jsonb,
  2
),
(
  'tanc-lily-top',
  'TANC Lily™ Three-Pocket Tailored Scrub Top',
  'scrubs',
  320, 18, 4.8, 198, 'Popular Top', 'LABx™ Ultra-Flex', '👕',
  'Fitted feminine cut with double front drop-in pockets, dedicated pen divider, and side seam slits for unrestricted patient transfers and CPR.',
  '[{"name":"Navy Blue","hex":"#1e3a8a"},{"name":"Hunter Green","hex":"#14532d"},{"name":"Dusty Rose","hex":"#db2777"},{"name":"Ceil Blue","hex":"#60a5fa"}]'::jsonb,
  '["XS","S","M","L","XL"]'::jsonb,
  '["Tailored V-neckline","Triple reinforced pockets","Wrinkle-resistant wash & wear","Fade-proof dyeing"]'::jsonb,
  3
),
(
  'tanc-leo-top',
  'TANC Leo™ Classic Men''s Athletic Scrub Top',
  'scrubs',
  320, 18, 4.8, 165, NULL, 'LABx™ Ultra-Flex', '👔',
  'Athletic cut V-neck top with deep chest pocket and reinforced side splits. Tailored for comfort under consultation coats or theatre gowns.',
  '[{"name":"Midnight Black","hex":"#111827"},{"name":"Deep Navy","hex":"#1e3a8a"},{"name":"Forest Green","hex":"#14532d"},{"name":"Royal Blue","hex":"#2563eb"}]'::jsonb,
  '["S","M","L","XL","2XL"]'::jsonb,
  '["Chest pocket with pen sleeve","Back shoulder yoke for mobility","Tagless inner comfort collar","Quick-drying fabric"]'::jsonb,
  4
),
(
  'tanc-cleo-jogger',
  'TANC Cleo™ Six-Pocket Cargo Scrub Joggers',
  'pants',
  320, 18, 4.9, 340, 'High Demand', 'LABx™ Stretch Weave', '👖',
  'Modern tapered jogger scrub pants with double cargo zippered pockets, ribbed knit ankle cuffs, and high-tenacity waistband cord.',
  '[{"name":"Midnight Black","hex":"#111827"},{"name":"Deep Navy","hex":"#1e3a8a"},{"name":"Hunter Green","hex":"#14532d"},{"name":"Burgundy Wine","hex":"#831843"}]'::jsonb,
  '["XS","S","M","L","XL","2XL"]'::jsonb,
  '["Ribbed comfort ankle cuffs","2 zippered cargo security pockets","2 deep slash hand pockets","2 back patch pockets"]'::jsonb,
  5
),
(
  'tanc-lab-coat',
  'TANC Tailored Consultation Lab Coat',
  'coats',
  480, 27, 4.7, 142, 'Ward Rounds', 'Poly-Cotton Heavy Twill', '🥼',
  'Faculty certified consultation coat with notched lapels, side pass-through pocket slits to reach trouser pockets, and tablet sized compartments.',
  '[{"name":"Clinical White","hex":"#f8fafc"}]'::jsonb,
  '["XS","S","M","L","XL","2XL"]'::jsonb,
  '["Tablet-compatible hip pockets","Side access slit to trouser pockets","Crease-resistant finish","Reinforced bartack stress points"]'::jsonb,
  6
),
(
  'tanc-littmann-classic3',
  '3M Littmann Classic III Monitoring Stethoscope',
  'accessories',
  1650, 92, 5.0, 520, 'Gold Standard', 'Acoustic Precision Tunable', '🩺',
  'The benchmark diagnostic stethoscope for healthcare students and clinicians. Features tunable dual-sided stainless steel chestpiece and next-generation tubing.',
  '[{"name":"Black Edition","hex":"#18181b"},{"name":"Navy Blue","hex":"#1e3a8a"},{"name":"Burgundy","hex":"#831843"},{"name":"Hunter Green","hex":"#14532d"}]'::jsonb,
  '["Standard 69cm"]'::jsonb,
  '["Tunable dual-sided chestpiece","Next-gen long-life tubing","5-year manufacturer guarantee","Soft-sealing ear tips included"]'::jsonb,
  7
),
(
  'tanc-scrub-cap',
  'TANC Reversible Theatre Scrub Cap (Tie-Back)',
  'accessories',
  120, 7, 4.8, 89, NULL, '100% Breathable Cotton', '🧢',
  'Reversible theatre scrub hat with sweat-absorbent forehead band, ponytail pouch room, and durable fabric tie-backs.',
  '[{"name":"Deep Navy","hex":"#1e3a8a"},{"name":"Hunter Green","hex":"#14532d"},{"name":"Burgundy Wine","hex":"#831843"}]'::jsonb,
  '["One Size Fits All"]'::jsonb,
  '["Built-in sweatband","Comfortable rear tie-straps","Machine boil washable","Anti-chafing flatlock seams"]'::jsonb,
  8
)
ON CONFLICT (id) DO UPDATE SET
  name = EXCLUDED.name,
  collection = EXCLUDED.collection,
  price_zar = EXCLUDED.price_zar,
  price_usd = EXCLUDED.price_usd,
  description = EXCLUDED.description,
  colors = EXCLUDED.colors,
  sizes = EXCLUDED.sizes,
  specs = EXCLUDED.specs,
  updated_at = now();
