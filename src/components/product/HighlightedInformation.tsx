import { Box, Text } from '@mantine/core'
import useStyles from 'src/styles/global_classes'

const HighlightedInformation = ({ seller }: { seller: string }) => {
	const { classes } = useStyles()
	return (
		<Box
			h={280}
			sx={{
				overflow: 'scroll',
				'::-webkit-scrollbar': { width: 0 },
				'::-webkit-scrollbar-track': { backgroundColor: '#FFF' },
				'::-webkit-scrollbar-thumb': { backgroundColor: '#FFF' },
			}}>
			<Text className={classes.accordionTitle}>Öne Çıkan Bilgiler</Text>
			<ul style={{ paddingLeft: 20, color: '#999' }}>
				<li>
					<Text className={classes.grayText}>15 gün içinde ücretsiz iade. Detaylı bilgi için kullanıcı koşullarını inceleyin.</Text>
				</li>
				<li style={{ marginTop: 10 }}>
					<Text className={classes.grayText}>
						Bu ürün <b style={{ cursor: 'pointer' }}>Tonny Black </b>tarafından gönderilecektir.{' '}
					</Text>
				</li>
				<li style={{ marginTop: 10 }}>
					<Text className={classes.grayText}>
						Türkiyede Üretilmiştir. Rahat Kalıptır. Kayma Yapmaz. 1. Kalite Malzemeden Üretilmiştir. Tam kalıptır. Kendi numaranızı alabilirsiniz. Erkek
					</Text>
				</li>
				<li style={{ marginTop: 10 }}>
					<Text className={classes.grayText}>Bu üründen en fazla 10 adet sipariş verilebilir. 10 adetin üzerindeki siparişleri Trendyol iptal etme hakkını saklı tutar. </Text>
				</li>
				<li style={{ marginTop: 10 }}>
					<Text className={classes.grayText}>Kampanya fiyatından satılmak üzere 50 adetten fazla stok sunulmuştur.</Text>
				</li>
				<li style={{ marginTop: 10 }}>
					<Text className={classes.grayText}>İncelemiş olduğunuz ürünün satış fiyatını satıcı belirlemektedir.</Text>
				</li>
				<li style={{ marginTop: 10 }}>
					<Text className={classes.grayText}>
						Bir ürün, birden fazla satıcı tarafından satılabilir. Birden fazla satıcı tarafından satışa sunulan ürünlerin satıcıları ürün için belirledikleri fiyata, satıcı
						puanlarına, teslimat statülerine, ürünlerdeki promosyonlara, kargonun bedava olup olmamasına ve ürünlerin hızlı teslimat ile teslim edilip edilememesine, ürünlerin stok
						ve kategorileri bilgilerine göre sıralanmaktadır.{' '}
					</Text>
				</li>
			</ul>
		</Box>
	)
}

export default HighlightedInformation
