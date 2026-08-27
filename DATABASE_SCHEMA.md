# Database Schema for Terrabyte Global Ltd

This document describes the database schema required for the Geospatial Technology and Surveying application.

## Testimonials Table

The testimonials table stores client testimonials for the Testimonials section.

### Table Schema
```sql
CREATE TABLE testimonials (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    title VARCHAR(255),
    company VARCHAR(255),
    image_url TEXT,
    rating INTEGER CHECK (rating >= 1 AND rating <= 5),
    content TEXT,
    date VARCHAR(100),
    location VARCHAR(255),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);
```

### Columns Description
- `id`: Auto-incrementing primary key
- `name`: Client's name (required)
- `title`: Client's job title
- `company`: Client's company/organization
- `image_url`: URL to client's photo
- `rating`: Rating from 1-5 stars
- `content`: Testimonial text content
- `date`: When the testimonial was given (e.g., "March 2023")
- `location`: Location of the client/project
- `created_at`: Timestamp when the record was created (auto-set)

### Sample Data
```sql
INSERT INTO testimonials (name, title, company, image_url, rating, content, date, location) VALUES
('Engr. Adeola Johnson', 'Project Manager', 'Lagos State Public Works Corporation', 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyNzQyNzl8MHwxfHNlYXJjaHwzfHxibHVzc2luZXJ8ZW58MHx8fHwxNjA3OTE2Mzc3&ixlib=rb-1.2.1&q=80&w=400', 5, 'Terrabyte Global Ltd delivered exceptional drone mapping services for our infrastructure project. Their accuracy and professionalism exceeded our expectations. The 3D models they created helped us identify potential issues before construction began, saving us significant time and resources.', 'March 2023', 'Lagos, Nigeria'),
('Dr. Chinedu Okoro', 'Director of Environmental Services', 'Federal Ministry of Environment', 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyNzQyNzl8MHwxfHNlYXJjaHwzfHxhdmF0YXJ8ZW58MHx8fHwxNjA3OTE2Mzk0&ixlib=rb-1.2.1&q=80&w=400', 5, 'Their coastal erosion monitoring study provided invaluable data for our climate change adaptation planning. The team''s expertise in remote sensing and GIS analysis was evident throughout the project. We''ve since engaged them for additional environmental monitoring projects.', 'January 2023', 'Abuja, Nigeria'),
('Mrs. Fatima Bello', 'CEO', 'GreenField Agro Solutions', 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyNzQyNzl8MHwxfHNlYXJjaHwzfHxmbWFsZSUyMGF2YXRhcnx8fHx8fHwxNjA3OTE2NDAz&ixlib=rb-1.2.1&q=80&w=400', 4, 'The precision agriculture implementation transformed our farming operations. Their drone-based multispectral analysis helped us optimize fertilizer usage and increase crop yields. The team was knowledgeable, responsive, and delivered actionable insights we could implement immediately.', 'November 2022', 'Oyo State, Nigeria'),
('Engr. Michael Okonkwo', 'Senior Bridge Engineer', 'Federal Ministry of Works', 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyNzQyNzl8MHwxfHNlYXJjaHwzfHxzaGF2aW5nJTIwYWZyb2NlfGVufDB8fHx8MTYwNzkxNjQyNA..&ixlib=rb-1.2.1&q=80&w=400', 5, 'Their bridge inspection services using drone photogrammetry were revolutionary for our maintenance planning. They identified structural issues that weren''t visible through traditional inspection methods. The detailed reports and 3D models helped us prioritize repairs effectively.', 'September 2022', 'Nationwide, Nigeria');
```

## Other Tables (Reference)

For completeness, here are the schemas for other tables in the application:

### Contacts Table
```sql
CREATE TABLE contacts (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    phone VARCHAR(50),
    message TEXT,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);
```

### Services Table
```sql
CREATE TABLE services (
    id SERIAL PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    icon VARCHAR(255),  -- Stores icon class name (e.g., "FaMapMarkedAlt")
    description TEXT,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);
```

### Projects Table
```sql
CREATE TABLE projects (
    id SERIAL PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    category VARCHAR(255),
    image_url TEXT,
    description TEXT,
    technologies TEXT[],  -- Array of strings
    client VARCHAR(255),
    duration VARCHAR(100),
    location VARCHAR(255),
    highlights TEXT[],  -- Array of strings
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);
```

### Team Members Table
```sql
CREATE TABLE team_members (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    title VARCHAR(255),
    bio TEXT,
    image_url TEXT,
    specialties TEXT[],  -- Array of strings
    email VARCHAR(255),
    phone VARCHAR(50),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);
```

### Blog Posts Table
```sql
CREATE TABLE blog_posts (
    id SERIAL PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    slug VARCHAR(255) UNIQUE NOT NULL,
    excerpt TEXT,
    image_url TEXT,
    content TEXT,
    author VARCHAR(255),
    date VARCHAR(100),
    category VARCHAR(255),
    tags TEXT[],  -- Array of strings
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);
```

## Setup Instructions

1. Create a new Supabase project at [supabase.com](https://supabase.com)
2. Copy the `.env.example` file to `.env` and fill in your Supabase URL and anon key
3. Use the SQL schema above to create the required tables in your Supabase database
4. You can insert the sample data to populate initial testimonials
5. Start the application - it should now fetch testimonials from your database

## API Endpoints for Testimonials

The backend provides the following endpoints for testimonials:
- `GET /api/testimonials` - Retrieve all testimonials
- `POST /api/testimonials` - Create a new testimonial
- `GET /api/testimonials/:id` - Retrieve a specific testimonial
- `PUT /api/testimonials/:id` - Update a specific testimonial
- `DELETE /api/testimonials/:id` - Delete a specific testimonial

Each testimonial object has the following structure:
```json
{
  "id": 1,
  "name": "Engr. Adeola Johnson",
  "title": "Project Manager",
  "company": "Lagos State Public Works Corporation",
  "image_url": "https://example.com/image.jpg",
  "rating": 5,
  "content": "Testimonial text...",
  "date": "March 2023",
  "location": "Lagos, Nigeria",
  "created_at": "2023-03-15T10:30:00Z"
}
```