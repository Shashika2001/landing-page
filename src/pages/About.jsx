import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';
import Greeting from '../components/Greeting';

const teamMembers = [
  {
    name: 'Sameera MAduranaga',
    role: 'CEO',
    image: 'https://t3.ftcdn.net/jpg/02/43/12/34/360_F_243123463_zTooub557xEWABDLk0jJklDyLSGl2jrr.jpg',
    description: 'Sameera is the CEO of the company and has over 20 years of experience in real estate.',
  },
  {
    name: 'Sachith Abeywardana',
    role: 'CTO',
    image: 'https://media.istockphoto.com/id/1167561020/photo/amazed-man-looking-at-camera-showing-with-hands-large-size.jpg?s=612x612&w=0&k=20&c=EyjESR5NzPVjLGbxEiCSsqt93x6jSUCOIYWRzmeqy6M=',
    description: 'Sachith is the CTO and leads the technology team with her expertise in software development.',
  },
  {
    name: 'Ashan Kavinda',
    role: 'COO',
    image: 'https://media.istockphoto.com/id/955158514/photo/confident-ceo-talking-about-company-success-strategy.jpg?s=612x612&w=0&k=20&c=V5uNpcECrfY8jazEaelq6DVHPoRx4M67-tYbiV-RKK8=',
    description: 'Ashan is the COO and ensures smooth operations across all departments.',
  },
];

export default function Home() {
  return (
    <Box sx={{ py: 7, px: 5 }}>

      {/* Image and Text Side by Side Section */}
      <Box sx={{ display: 'flex', alignItems: 'center', mt: 8 }}>
        <Box sx={{ flex: 1, pr: 2 }}>
          <img src="http://clipartmag.com/images/thinking-face-clipart-22.jpg" alt="Side Image" style={{ width: '100%', borderRadius: '8px' }} />
        </Box>
        <Box sx={{ flex: 1, pl: 2 }}>
          <Typography variant="h4" sx={{ fontWeight: 'bold', mb: 2 }}>
            Why Choose Us?
          </Typography>
          <Typography variant="body1" sx={{ color: 'text.secondary', mb: 3 }}>
            Our team of experienced professionals is dedicated to providing top-notch service and support to help you find the perfect home. We are committed to making your home buying experience smooth and enjoyable.
          </Typography>
        </Box>
      </Box>

      {/* Team Member Profiles Section */}
      <Box sx={{ mt: 8 }}>
        <Typography variant="h4" sx={{ fontWeight: 'bold', mb: 4 }}>
          Meet Our Team
        </Typography>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap' }}>
          {teamMembers.map((member, index) => (
            <Box key={index} sx={{ flex: '0 0 30%', mb: 4, textAlign: 'center' }}>
              <img src={member.image} alt={member.name} style={{ width: '100%', borderRadius: '8px', marginBottom: '1rem' }} />
              <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
                {member.name}
              </Typography>
              <Typography variant="subtitle1" sx={{ color: 'text.secondary', mb: 1 }}>
                {member.role}
              </Typography>
              <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                {member.description}
              </Typography>
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
}