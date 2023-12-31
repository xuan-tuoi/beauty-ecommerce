import React from 'react'
import { Box, Typography } from '@mui/material'
import BaseButton from '@/components/base/BaseButton'
import InfoTag from './InfoTag'
import ImageItem from '../base/ImageItem'
import { unicaOne } from '../../../public/font'

import { motion } from 'framer-motion'

const buttonVariants = {
	hidden: { opacity: 0, y: 160 },
	visible: {
		opacity: 1,
		y: 0
	}
}

const textVariants = {
	hidden: { opacity: 0, y: -160 },
	visible: {
		opacity: 1,
		y: 0
	}
}

const infoVariants = {
	hidden: {
		scale: 0
	},
	visible: {
		scale: 1
	}
}

const HeaderShopDetail = ({ onClick, dictionary }: any) => {
	return (
		<Box
			sx={{
				position: 'relative',
				height: { xs: '60vh', lg: '80vh' },
				width: '100%',
				display: 'flex',
				flexDirection: 'column',
				alignItems: 'center',
				justifyContent: 'center',
				backgroundImage: 'url(/img/home-hero-lg.png)',
				backgroundRepeat: 'no-repeat',
				backgroundSize: 'cover',
				backgroundPosition: 'center',
				backgroundAttachment: 'fixed'
			}}
		>
			<motion.div
				variants={textVariants}
				initial='hidden'
				whileInView='visible'
				transition={{ type: 'spring' }}
			>
				<Typography
					variant='h1'
					className={unicaOne.className}
					sx={{
						color: '#fff',
						fontSize: { xs: '46px', md: '62px', lg: '96px' },
						mb: { xs: '24px', md: '12px' },
						textTransform: 'uppercase',
						textAlign: 'center'
					}}
				>
					{dictionary.Shop.Header.title}
				</Typography>

				<Typography
					variant='h3'
					sx={{
						color: '#fff',
						fontSize: { xs: '18px', lg: '20px' },
						textAlign: 'center',
						mb: { xs: '32px', lg: '70px' },
						maxWidth: {
							xs: 'var(--max-width-xs)',
							sm: 'var(--max-width-sm)',
							md: '700px',
							lg: '900px',
							xl: '1080px'
						}
					}}
				>
					{dictionary.Shop.Header.description}
				</Typography>
			</motion.div>

			<motion.div
				variants={buttonVariants}
				initial='hidden'
				whileInView='visible'
				transition={{ type: 'spring' }}
			>
				<BaseButton
					label={dictionary.Shop.Header.button}
					variant='contained'
					bgStyle='color'
					styleSx={{
						textTransform: 'normal',
						padding: { xs: '12px 24px', lg: '24px 80px' },
						color: '#C0335D',
						backgroundColor: '#fff',
						fontSize: { xs: '14px', md: '16px', lg: '20px' },
						borderRadius: '8px',
						transition: 'all 0.3s',
						'&:hover': {
							backgroundColor: '#C0335D',
							color: '#fff'
						}
					}}
					onClick={onClick}
				/>
			</motion.div>

			<Box
				sx={{
					position: { xs: 'relative', md: 'absolute' },
					bottom: { md: '-120px', lg: '-100px' },
					display: { xs: 'none', md: 'block' }
				}}
			>
				<motion.div
					variants={infoVariants}
					initial='hidden'
					whileInView='visible'
					transition={{ type: 'spring' }}
				>
					<InfoTag dictionary={dictionary} />
				</motion.div>
			</Box>
		</Box>
	)
}

export default HeaderShopDetail
