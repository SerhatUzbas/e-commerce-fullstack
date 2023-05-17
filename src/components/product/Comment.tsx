import { Box, BoxProps, Center, Divider, Flex, Rating, Stack, Text } from '@mantine/core'
import useStyles from 'src/styles/global_classes'
import { Comet, Hanger, Tex, ThumbUp } from 'tabler-icons-react'

type CommentProps = {
	data: {
		id?: string | number
		userId: string | number
		username?: string
		content: string
		favCount: number
		rating: number
		size: string | number
		seller?: { name: string; id: number | string }
		date?: string
	}
	withBorder?: boolean
}

export interface CommentsProps extends BoxProps {
	totalCount?: number
	rating?: number
	comments?: CommentProps['data'][]
}

const Comments = ({ totalCount, rating, comments, ...props }: CommentsProps) => {
	return (
		<Box {...props}>
			<Text size={22} weight={600}>
				Ürün Değerlendirmeleri
			</Text>
			<Stack mt={20}>
				<Box py={30} style={{ borderTop: '1px solid #e2e2e2', borderBottom: '1px solid #e2e2e2' }}>
					<Flex w='60%' justify='space-between' align='center'>
						<Flex align='center' gap={10}>
							<Text size={28}>{rating}</Text>
							<Rating value={rating} size='lg' />
						</Flex>
						<Text size={14} color='#999'>
							{totalCount} Değerlendirme | Yorum
						</Text>
					</Flex>
				</Box>
				<Box py={10} bg='#f3f3f3' style={{ borderRadius: 6 }}>
					<Flex justify='center' gap={20} align='center'>
						<Center bg='#f27a1a' p={4} style={{ borderRadius: '100%' }}>
							<Hanger color='#fff' width={27} height={27} />
						</Center>
						<Text size={14} weight={600}>
							Kullanıcıların çoğu kendi bedeninizi almanızı öneriyor.
						</Text>
					</Flex>
				</Box>
				<Stack>
					{comments?.map((comment, i) => (
						<Comment key={comment.id} data={comment} withBorder={i !== 0} />
					))}
				</Stack>
			</Stack>
		</Box>
	)
}

const Comment = ({ data, withBorder }: CommentProps) => {
	const { classes } = useStyles()

	return (
		<Box pt={10} style={{ borderTop: withBorder ? '1px solid #e2e2e2' : 'none' }}>
			<Stack key={data?.id}>
				<Flex align='center' gap={20}>
					<Rating value={data?.rating} size='xs' fractions={10} />
					<Text size={14}>{data?.content}</Text>
				</Flex>
				<Flex align='center' justify='space-between'>
					<Flex align='center' gap={10}>
						<Text className={classes.grayText}>{data?.username}</Text>
						<Divider orientation='vertical' />
						<Text className={classes.grayText}>{data?.date}</Text>
						<Divider orientation='vertical' />
						<Text className={classes.grayText}>
							<b style={{ color: '#4d8ee1', fontWeight: 600 }}>{data?.seller?.name}</b> satıcısından alındı.
						</Text>
						<Divider orientation='vertical' />
						<Text className={classes.grayText}>Beden: {data?.size}</Text>
					</Flex>
					<Flex align='flex-end' gap={4}>
						<ThumbUp width={21} height={20} />
						<Text className={classes.grayText}>Yorumu Beğen</Text>
						<Text className={classes.grayText}>({data?.favCount})</Text>
					</Flex>
				</Flex>
			</Stack>
		</Box>
	)
}

export default Comments
