
export interface Partner {
  id: number;
  name: string;
  logo: string;
  description: string;
  category: string;
  yearFounded: number;
  location: string;
  specialization: string;
  website: string;
  contactInfo: {
    email: string;
    phone: string;
    address: string;
  };
}

// Sample partners data with extended information
export const allPartners: Partner[] = [
  {
    id: 1,
    name: 'SolarTech Industries',
    logo: 'https://via.placeholder.com/300x150?text=SolarTech',
    description: 'Leading manufacturer of high-efficiency solar cells and modules.',
    category: 'manufacturer',
    yearFounded: 2005,
    location: 'San Jose, California',
    specialization: 'Monocrystalline and Polycrystalline Panels',
    website: 'https://example.com/solartech',
    contactInfo: {
      email: 'contact@solartech.example',
      phone: '+1 (555) 123-4567',
      address: '123 Innovation Drive, San Jose, CA 95134'
    }
  },
  {
    id: 2,
    name: 'PowerGrid Solutions',
    logo: 'https://via.placeholder.com/300x150?text=PowerGrid',
    description: 'Specializing in smart grid technologies and energy management systems.',
    category: 'technology',
    yearFounded: 2010,
    location: 'Boston, Massachusetts',
    specialization: 'Grid Integration and Control Systems',
    website: 'https://example.com/powergrid',
    contactInfo: {
      email: 'info@powergrid.example',
      phone: '+1 (555) 234-5678',
      address: '456 Tech Square, Boston, MA 02134'
    }
  },
  {
    id: 3,
    name: 'GreenEnergy Systems',
    logo: 'https://via.placeholder.com/300x150?text=GreenEnergy',
    description: 'Innovative provider of renewable energy solutions and storage systems.',
    category: 'storage',
    yearFounded: 2012,
    location: 'Austin, Texas',
    specialization: 'Battery Storage and Energy Management',
    website: 'https://example.com/greenenergy',
    contactInfo: {
      email: 'contact@greenenergy.example',
      phone: '+1 (555) 345-6789',
      address: '789 Renewable Lane, Austin, TX 78701'
    }
  },
  {
    id: 4,
    name: 'SunPower Innovations',
    logo: 'https://via.placeholder.com/300x150?text=SunPower',
    description: 'Developer of cutting-edge solar technologies and installation services.',
    category: 'installer',
    yearFounded: 2008,
    location: 'Phoenix, Arizona',
    specialization: 'Installation and Maintenance Services',
    website: 'https://example.com/sunpower',
    contactInfo: {
      email: 'hello@sunpower.example',
      phone: '+1 (555) 456-7890',
      address: '1010 Solar Avenue, Phoenix, AZ 85001'
    }
  },
  {
    id: 5,
    name: 'EcoSmart Solutions',
    logo: 'https://via.placeholder.com/300x150?text=EcoSmart',
    description: 'Sustainable energy consulting and implementation services.',
    category: 'consultant',
    yearFounded: 2015,
    location: 'Seattle, Washington',
    specialization: 'Energy Audits and Efficiency Planning',
    website: 'https://example.com/ecosmart',
    contactInfo: {
      email: 'info@ecosmart.example',
      phone: '+1 (555) 567-8901',
      address: '222 Sustainability Way, Seattle, WA 98101'
    }
  },
  {
    id: 6,
    name: 'BrightFuture Corp',
    logo: 'https://via.placeholder.com/300x150?text=BrightFuture',
    description: 'Renewable energy financing and investment solutions.',
    category: 'finance',
    yearFounded: 2011,
    location: 'Chicago, Illinois',
    specialization: 'Solar Financing and Investment',
    website: 'https://example.com/brightfuture',
    contactInfo: {
      email: 'invest@brightfuture.example',
      phone: '+1 (555) 678-9012',
      address: '333 Finance Plaza, Chicago, IL 60601'
    }
  },
  {
    id: 7,
    name: 'SolarEdge Technologies',
    logo: 'https://via.placeholder.com/300x150?text=SolarEdge',
    description: 'Provider of intelligent inverter solutions for solar power systems.',
    category: 'manufacturer',
    yearFounded: 2006,
    location: 'Denver, Colorado',
    specialization: 'Solar Inverters and Power Optimizers',
    website: 'https://example.com/solaredge',
    contactInfo: {
      email: 'support@solaredge.example',
      phone: '+1 (555) 789-0123',
      address: '444 Innovation Court, Denver, CO 80202'
    }
  },
  {
    id: 8,
    name: 'CleanTech Ventures',
    logo: 'https://via.placeholder.com/300x150?text=CleanTech',
    description: 'Venture capital firm focused on clean energy and sustainability innovations.',
    category: 'finance',
    yearFounded: 2009,
    location: 'San Francisco, California',
    specialization: 'Venture Capital and Growth Investment',
    website: 'https://example.com/cleantech',
    contactInfo: {
      email: 'ventures@cleantech.example',
      phone: '+1 (555) 890-1234',
      address: '555 Venture Drive, San Francisco, CA 94105'
    }
  },
];
