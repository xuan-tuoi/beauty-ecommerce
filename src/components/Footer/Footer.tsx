import React from 'react';
import { Box, Typography } from '@mui/material';

import FooterItem, { FooterProps } from './FooterItem';
import ImageItem from '../base/ImageItem';
import ListIcons from './ListIcons';
import { hindMadurai } from '@/assets/font';

const ListItemFooter = [
  {
    id: '1',
    title: 'Services',
    listItem: [
      {
        id: '1.0',
        label: 'Blog',
        link: '/blog',
      },
      {
        id: '1.1',
        label: 'Our Products',
        link: '/product',
      },
      {
        id: '1.2',
        label: 'Account',
        link: '/account',
      },
    ],
  },
  {
    id: '2',
    title: 'Customer Care',
    listItem: [
      {
        id: '2.0',
        label: 'Privacy Policy',
        link: '/privacy-policy',
      },
      {
        id: '2.1',
        label: 'FAQs',
        link: '/faqs',
      },
    ],
  },
  {
    id: '3',
    title: 'Shop',
    listItem: [
      {
        id: '3.0',
        label: `L'Oréal`,
        link: '/loreal',
      },
      {
        id: '3.1',
        label: 'The Ordinary',
        link: '/ordinary',
      },
      {
        id: '3.2',
        label: 'Bioderma',
        link: '/bioderma',
      },
    ],
  },
];

const Footer = () => {
  return (
    <Box>
      <Box
        sx={{
          height: '434px',
          width: '100%',
          backgroundColor: '#2C5F23',
        }}
      >
        <Box
          sx={{
            padding: { md: '50px 0' },
            maxWidth: { md: 'var(--max-width-xl)' },
            margin: { md: '0 auto' },
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-start',
          }}
        >
          <Box>
            <ImageItem
              imgSrc="/img/logo/logo_white.png"
              style={{
                width: { md: '300px' },
                height: { md: '62px' },
                mb: { md: '52px' },
              }}
            />
            <Box
              sx={{
                pl: { md: '42px' },
                '& h4': {
                  color: '#FFF',
                  fontSize: '18px',
                  lineHeight: '180%',
                  fontWeight: 400,
                  marginBottom: '20px',
                },
              }}
            >
              <Typography variant="h4">xuantuoi@gmail.com</Typography>
              <Typography variant="h4">0987654321</Typography>
              <ListIcons />
            </Box>
          </Box>
          {ListItemFooter.map((item) => {
            return (
              <FooterItem
                key={item.id}
                title={item.title}
                listItems={item.listItem}
              />
            );
          })}
        </Box>
      </Box>
      <Box
        sx={{
          height: { md: '100px' },
          backgroundColor: '#182E08',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Typography
          variant="h5"
          className={hindMadurai.className}
          sx={{
            color: '#FFF',
            fontSize: '16px',
            fontWeight: 400,
            lineHeight: '180%',
          }}
        >
          © 2023 Glow&Grace. All Right Reserved. With Love By XuanTuoi
        </Typography>
      </Box>
    </Box>
  );
};

export default Footer;
