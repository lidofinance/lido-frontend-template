import Document, {
  Head,
  Html,
  Main,
  NextScript,
  DocumentContext,
  DocumentInitialProps,
} from 'next/document';
import { ServerStyleSheet } from 'styled-components';
import { Fonts, LidoUIHead } from '@lidofinance/lido-ui';

import { dynamics } from 'config';

let host: string;

export default class MyDocument extends Document {
  static async getInitialProps(
    ctx: DocumentContext,
  ): Promise<DocumentInitialProps> {
    host = `https://${ctx?.req?.headers?.host}`;

    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) =>
            sheet.collectStyles(<App {...props} />),
        });

      const initialProps = await Document.getInitialProps(ctx);

      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      };
    } finally {
      sheet.seal();
    }
  }

  // PAY ATTENTION: Put correct title
  private static metaTitle = 'Lido Frontend Template | Lido';

  // PAY ATTENTION: Put correct description
  private static metaDescription =
    'Liquid staking with Lido. ' +
    'Stake {TOKEN} with Lido to earn daily rewards while keeping full control of your staked tokens. ' +
    'Start earning rewards in just a few clicks.';

  // PAY ATTENTION: Put correct preview image URL
  private static get metaPreviewImgUrl(): string {
    return `${host}/lido-preview.png`;
  }

  render(): JSX.Element {
    return (
      <Html lang="en">
        <Head>
          {/* PAY ATTENTION: Put correct metadata */}
          <link rel="manifest" href="/manifest.json" />
          <link rel="icon" href="/favicon.ico" sizes="any" />
          <link
            rel="icon"
            type="image/svg+xml"
            sizes="512x512"
            href="/favicon-512x512.svg"
          />
          <link
            rel="apple-touch-icon"
            type="image/png"
            sizes="180x180"
            href="/apple-touch-icon.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="194x194"
            href="/favicon-194x194.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="/favicon-32x32.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="/favicon-16x16.png"
          />
          <meta name="description" content="Lido Template" />
          <meta property="og:type" content="website" />
          <meta property="og:title" content={MyDocument.metaTitle} />
          <meta
            property="og:description"
            content={MyDocument.metaDescription}
          />
          <meta property="og:image" content={MyDocument.metaPreviewImgUrl} />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content={MyDocument.metaTitle} />
          <meta
            name="twitter:description"
            content={MyDocument.metaDescription}
          />
          <meta
            name="twitter:image:src"
            content={MyDocument.metaPreviewImgUrl}
          />
          <meta name="twitter:site" content="@lidofinance" />
          <meta name="twitter:creator" content="@lidofinance" />
          <meta name="description" content={MyDocument.metaDescription} />
          <meta name="currentChain" content={String(dynamics.defaultChain)} />
          <Fonts />
          <LidoUIHead />
          {/* /runtime/window-env.js needs for dynamic env */}
          {/* eslint-disable-next-line @next/next/no-sync-scripts */}
          <script src="/runtime/window-env.js" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
