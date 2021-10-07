import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
	render() {
		return (
			<Html>
				<Head>
					{/* Favicon */}
					<link rel='icon' href='/favicon.ico' />
					{/* Fonts */}
					<link rel='preconnect' href='https://fonts.googleapis.com' />
					<link rel='preconnect' href='https://fonts.gstatic.com' crossorigin />
					<link
						href='https://fonts.googleapis.com/css2?family=Archivo+Black&family=Archivo+Narrow:wght@400;700&family=Comfortaa:wght@400;700&family=Montserrat:wght@400;700&family=Poppins:wght@400;700&display=swap'
						rel='stylesheet'
					/>
				</Head>
				<body>
					<Main />
					<NextScript />
				</body>
			</Html>
		);
	}
}

export default MyDocument;
