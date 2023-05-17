import { Box, BoxProps, Button, Divider, Flex, Stack, Text } from '@mantine/core'
import { Plus, Tex } from 'tabler-icons-react'

interface BasketHighlightProps extends BoxProps {
	productTotal: number
	cargoTotal: number
	generalTotal: number
}

const BasketHighlight = ({ cargoTotal, generalTotal, productTotal, ...props }: BasketHighlightProps) => {
	return (
		<Box {...props}>
			<Stack>
				<Button size='lg' bg='#f27a1a' color='#f27a1a' sx={{ ':hover': { background: '#f27a1a' } }}>
					Sepeti Onayla
				</Button>
				<Box>
					<Box p={10} style={{ border: '1px solid #f0f0f0', borderRadius: 12 }}>
						<Stack>
							<Text size={22} color='#333'>
								Sipariş Özeti
							</Text>
							<Stack spacing={4}>
								<Flex align='center' justify='space-between'>
									<Text size={13} color='#000000'>
										Ürünün Toplamı
									</Text>
									<Text size={16} weight={600} color='#000000'>
										{productTotal.toLocaleString('de')} TL
									</Text>
								</Flex>
								<Flex align='center' justify='space-between'>
									<Text size={13} color='#000000'>
										Kargo Toplamı
									</Text>
									<Text size={16} weight={600} color='#000000'>
										{cargoTotal} TL
									</Text>
								</Flex>
							</Stack>
							<Divider color='#f0f0f0' />
							<Flex align='center' justify='flex-end'>
								<Text color='#f27a1a' size={18} weight={700}>
									{generalTotal.toLocaleString('de')} TL
								</Text>
							</Flex>
						</Stack>
					</Box>
				</Box>
				<Box>
					<Box py={5} style={{ border: '1px solid #f0f0f0', borderRadius: 6 }}>
						<Flex align='center' justify='center' gap={5}>
							<Plus color='#f27a1a' size={16} />
							<Text size={12} weight={600}>
								İNDİRİM KODU GİR
							</Text>
						</Flex>
					</Box>
				</Box>
				<Button size='lg' bg='#f27a1a' sx={{ ':hover': { background: '#f27a1a' } }}>
					Sepeti Onayla
				</Button>
			</Stack>
		</Box>
	)
}

export default BasketHighlight
