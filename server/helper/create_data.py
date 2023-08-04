import random
import json
from faker import Faker

# Create a Faker instance for generating fake data
fake = Faker()

# List of job titles and descriptions
job_titles = ['Software Engineer', 'Data Scientist', 'Product Manager', 'Sales Representative', 'Graphic Designer', 'Accountant', 'Marketing Manager', 'HR Specialist', 'Customer Support', 'Project Manager', 'Web Developer', 'UX/UI Designer', 'Data Analyst', 'Content Writer', 'Financial Analyst', 'Business Analyst', 'Network Engineer', 'DevOps Engineer', 'Digital Marketing Specialist', 'Sales Manager', 'Operations Manager', 'Customer Success Manager', 'Quality Assurance Engineer', 'Systems Administrator', 'IT Support Specialist', 'Supply Chain Analyst', 'Product Designer', 'Data Engineer', 'Frontend Developer', 'Backend Developer', 'Cloud Solutions Architect', 'Social Media Manager', 'UX Researcher', 'Brand Manager', 'Cybersecurity Analyst', 'Mobile App Developer', 'UX/UI Developer', 'Database Administrator', 'Content Marketing Manager', 'Financial Planner', 'Public Relations Specialist', 'Human Resources Manager', 'Technical Writer', 'E-commerce Manager', 'SEO Specialist', 'Video Editor',
              'Event Coordinator', 'Interior Designer', 'Game Developer', 'Software Tester', 'Hardware Engineer', 'Technical Support Engineer', 'Market Research Analyst', 'Research Scientist', 'Fashion Designer', 'Real Estate Agent', 'Physical Therapist', 'Nurse Practitioner', 'Dentist', 'Pharmacist', 'Fitness Instructor', 'Chef', 'Mechanical Engineer', 'Electrical Engineer', 'Civil Engineer', 'Architect', 'Environmental Scientist', 'Biomedical Engineer', 'Forensic Scientist', 'Psychologist', 'Teacher', 'Professor', 'Librarian', 'Police Officer', 'Firefighter', 'Paramedic', 'Airline Pilot', 'Flight Attendant', 'Astronaut', 'Artist', 'Musician', 'Actor', 'Writer', 'Photographer', 'Journalist', 'Chef', 'Baker', 'Barista', 'Waiter/Waitress', 'Bartender', 'Personal Trainer', 'Yoga Instructor', 'Lifeguard', 'Tour Guide', 'Event Planner', 'Wedding Planner', 'Social Worker', 'Counselor', 'Therapist', 'Veterinarian', 'Zoologist', 'Biologist', 'Chemist', 'Geologist', 'Meteorologist', 'Astronomer']

# List of company names
companies = ['Acme Inc.', 'TechCo', 'GlobalCorp', 'Innovate Solutions', 'Creative Minds',
             'ExcelTech', 'Swift Services', 'Star Enterprises', 'Bright Ideas', 'Dynamic Solutions']

data = []

for _ in range(100):
    job_title = random.choice(job_titles)
    description = fake.text(max_nb_chars=200)
    company = random.choice(companies)
    salary = round(random.uniform(40000, 120000), 2)
    applied = fake.date_between(start_date='-30d', end_date='today')
    created_date = fake.date_between(start_date='-90d', end_date='-31d')

    entry = {
        'job title': job_title,
        'description': description,
        'company': company,
        'salary': salary,
        'applied': applied.strftime('%Y-%m-%d'),
        'created_date': created_date.strftime('%Y-%m-%d')
    }
    data.append(entry)

# Write data to a JSON file
with open('random_data.json', 'w') as json_file:
    json.dump(data, json_file, indent=4)

print("Data written to random_data.json file.")
