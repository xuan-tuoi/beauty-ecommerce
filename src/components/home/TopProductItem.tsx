import { hindMadurai } from '@/assets/font';
import {
  Box,
  styled,
  Tooltip,
  tooltipClasses,
  TooltipProps,
  Typography,
} from '@mui/material';
import Link from 'next/link';
import React from 'react';
import BaseButton from '../base/BaseButton';
import ImageItem from '../base/ImageItem';
import RatingItem from '../base/RatingItem';

const LightTooltip = styled(({ className, ...props }: TooltipProps) => (
  <Tooltip {...props} classes={{ popper: className }} />
))(({ theme }) => ({
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: theme.palette.common.white,
    color: 'rgba(0, 0, 0, 0.8)',
    boxShadow: theme.shadows[1],
    fontSize: 12,
  },
}));

const TopProductItem = ({ item }: any) => {
  return (
    <Link href={`/product/${item.id}?page=1&limit=10`}>
      <Box
        sx={{
          position: 'relative',
          border: { md: '1px solid #EEE' },
          background: '#FFF',
          display: { md: 'flex' },
          mb: { xs: '24px', lg: '80px', xl: '0' },
          mt: { xs: '30px', md: '0px' },
          mr: { xs: '12px' },
          ml: { xs: '12px', sm: '0' },
          padding: { xs: '12px', sm: '16px 24px', lg: '244px 16px 32px 16px ' },
          transition: 'all 0.2s ease-in-out',
          boxShadow: {
            xs: '0px 18px 36px 0px rgba(0, 0, 0, 0.07)',
            md: 'none',
          },
          '&:hover': {
            boxShadow: {
              md: '0px 18px 20px 0px rgba(0, 0, 0, 0.07)',
            },
            borderColor: '#6DC229',
          },
        }}
      >
        <Box
          sx={{
            position: { xs: 'relative', lg: 'absolute' },
            top: { lg: '-11%' },
            left: { lg: '6%' },
            zIndex: '1',
            border: { lg: '1px solid #EEE' },
            mr: { xs: '0px', md: '24px', lg: '0' },
          }}
        >
          <ImageItem
            imgSrc={item.thumbnail}
            style={{
              width: { xs: '100%', md: '300px' },
              height: { xs: '260px', md: '268px' },
              '& img': {
                objectFit: 'cover !important',
              },
            }}
          />
        </Box>
        <Box>
          <LightTooltip title={item.name}>
            <Typography
              className={hindMadurai.className}
              variant="h5"
              sx={{
                color: '#121212',
                fontSize: '24px',
                margin: { xs: '20px 0' },
                fontWeight: 600,
                lineHeight: '115.5%',
                display: '-webkit-box',
                textOverflow: 'ellipsis',
                overflow: 'hidden',
                WebkitLineClamp: 1,
                WebkitBoxOrient: 'vertical',
              }}
            >
              {item.name}
            </Typography>
          </LightTooltip>
          <Typography
            className={hindMadurai.className}
            variant="h6"
            sx={{
              color: '#315316',
              fontSize: '20px',
              lineHeight: '150%',
              padding: { xs: '0 0 12px 0', md: '12px 0' },
            }}
          >
            from {item.price}$ /item
          </Typography>
          <Typography
            sx={{
              color: '#3E3E3E',
              fontSize: ' 18px',
              lineHeight: '180%',
              mb: { md: '20px' },
              textOverflow: 'ellipsis',
              overflow: 'hidden',
              WebkitLineClamp: 3,
              WebkitBoxOrient: 'vertical',
              display: '-webkit-box',
            }}
            className={hindMadurai.className}
          >
            {item.description}
          </Typography>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}
          >
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
              }}
            >
              <RatingItem numberOfRate={item.rate} />
              <Typography
                className={hindMadurai.className}
                sx={{
                  color: '#3E3E3E',
                  fontSize: '16px',
                  lineHeight: '180%',
                  fontWeight: 400,
                  ml: '10px',
                }}
              >
                ({item.inventory})
              </Typography>
            </Box>
            <BaseButton
              variant="contained"
              bgStyle="gradient"
              label="Shop now"
              styleSx={{
                ml: { md: '32px' },
                padding: { md: '8px 36px' },
                borderRadius: '50px',
                background: 'linear-gradient(146deg, #315316 0%, #72A748 100%)',
                fontSize: '14px',
                fontWeight: 300,
                lineHeight: '180%',
                textTransform: 'capitalize',
                width: { md: '123px' },
                whiteSpace: 'nowrap',
              }}
            />
          </Box>
        </Box>
      </Box>
    </Link>
  );
};

export default TopProductItem;