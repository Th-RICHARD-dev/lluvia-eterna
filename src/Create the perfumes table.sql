-- Create the perfumes table
create table perfumes (
  id bigint primary key generated always as identity,
  name text not null,
  brand text not null,
  price decimal(10,2) not null,
  description text,
  image text,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- Insert some sample perfume data
insert into perfumes (name, brand, price, description, image)
values 
  ('La Vie Est Belle', 'Lancôme', 120.00, 'A sweet floral fragrance with iris and vanilla notes', 'https://example.com/lavieestbelle.jpg'),
  ('Light Blue', 'Dolce & Gabbana', 95.00, 'Fresh citrus scent with notes of apple and cedar', 'https://example.com/lightblue.jpg'),
  ('Black Opium', 'Yves Saint Laurent', 135.00, 'Coffee and vanilla based oriental fragrance', 'https://example.com/blackopium.jpg');

-- Enable Row Level Security (RLS)
alter table perfumes enable row level security;

-- Create a policy to allow public read access
create policy "Public can view perfumes"
  on perfumes
  for select
  to anon
  using (true);