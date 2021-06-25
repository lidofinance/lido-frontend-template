import { FC } from 'react';
import { Link } from '@lidofinance/lido-ui';
import Logo from 'components/logo';
import {
  FooterStyle,
  FooterDividerStyle,
  FooterLogoStyle,
  FooterGroupStyle,
  FooterTitleStyle,
  FooterItemStyle,
} from './footerStyles';

const Footer: FC = () => (
  <FooterStyle size="full" forwardedAs="footer">
    <FooterDividerStyle />

    <FooterLogoStyle>
      <Logo />
    </FooterLogoStyle>

    <FooterGroupStyle>
      <FooterTitleStyle>Resources</FooterTitleStyle>
      <FooterItemStyle>
        <Link href="https://stake.lido.fi/">Stake with Lido</Link>
      </FooterItemStyle>
      <FooterItemStyle>
        <Link href="https://lido.fi/static/Lido:Ethereum-Liquid-Staking.pdf">
          Primer
        </Link>
      </FooterItemStyle>
      <FooterItemStyle>
        <Link href="https://lido.fi/terms-of-use">Terms of Use</Link>
      </FooterItemStyle>
      <FooterItemStyle>
        <Link href="https://lido.fi/privacy-notice">Privacy Notice</Link>
      </FooterItemStyle>
      <FooterItemStyle>
        <Link href="https://lido.fi/faq">FAQ</Link>
      </FooterItemStyle>
      <FooterItemStyle>
        <Link href="https://lido.fi/static/LIDO_press_kit.zip">Press Kit</Link>
      </FooterItemStyle>
    </FooterGroupStyle>

    <FooterGroupStyle>
      <FooterTitleStyle>Community</FooterTitleStyle>
      <FooterItemStyle>
        <Link href="https://twitter.com/lidofinance">Twitter</Link>
      </FooterItemStyle>
      <FooterItemStyle>
        <Link href="https://t.me/lidofinance">Telegram</Link>
      </FooterItemStyle>
      <FooterItemStyle>
        <Link href="https://discord.gg/vgdPfhZ">Discord</Link>
      </FooterItemStyle>
      <FooterItemStyle>
        <Link href="https://github.com/lidofinance">GitHub</Link>
      </FooterItemStyle>
      <FooterItemStyle>
        <Link href="https://www.reddit.com/r/LidoFinance/">Reddit</Link>
      </FooterItemStyle>
      <FooterItemStyle>
        <Link href="https://blog.lido.fi/">Blog</Link>
      </FooterItemStyle>
    </FooterGroupStyle>

    <FooterGroupStyle>
      <FooterTitleStyle>Contacts</FooterTitleStyle>
      <FooterItemStyle>
        <Link href="mailto:info@lido.fi">info@lido.fi</Link>
      </FooterItemStyle>
      <FooterItemStyle>
        <Link href="http://help.lido.fi/">Help Center</Link>
      </FooterItemStyle>
    </FooterGroupStyle>
  </FooterStyle>
);

export default Footer;
