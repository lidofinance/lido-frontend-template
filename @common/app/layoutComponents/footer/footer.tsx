import { FC } from 'react';
import { LidoLogo } from '@lidofinance/lido-ui';
import {
  FooterStyle,
  FooterDivider,
  FooterLogo,
  FooterGroup,
  FooterTitle,
  FooterItemLink,
  FooterItemText,
} from './styles';

const Footer: FC = () => (
  <FooterStyle size="full" forwardedAs="footer">
    <FooterDivider />

    <FooterLogo>
      <LidoLogo />
    </FooterLogo>

    <FooterGroup>
      <FooterTitle>Resources</FooterTitle>
      <FooterItemLink href="https://stake.lido.fi/">
        Stake with Lido
      </FooterItemLink>
      <FooterItemLink href="https://lido.fi/static/Lido:Ethereum-Liquid-Staking.pdf">
        Primer
      </FooterItemLink>
      <FooterItemLink href="https://lido.fi/terms-of-use">
        Terms of Use
      </FooterItemLink>
      <FooterItemLink href="https://lido.fi/privacy-notice">
        Privacy Notice
      </FooterItemLink>
      <FooterItemLink href="https://lido.fi/faq">FAQ</FooterItemLink>
      <FooterItemLink href="https://lido.fi/static/LIDO_press_kit.zip">
        Press Kit
      </FooterItemLink>
      <FooterItemText>Some text</FooterItemText>
    </FooterGroup>

    <FooterGroup>
      <FooterTitle>Community</FooterTitle>
      <FooterItemLink href="https://twitter.com/lidofinance">
        Twitter
      </FooterItemLink>
      <FooterItemLink href="https://t.me/lidofinance">Telegram</FooterItemLink>
      <FooterItemLink href="https://discord.gg/vgdPfhZ">Discord</FooterItemLink>
      <FooterItemLink href="https://github.com/lidofinance">
        GitHub
      </FooterItemLink>
      <FooterItemLink href="https://www.reddit.com/r/LidoFinance/">
        Reddit
      </FooterItemLink>
      <FooterItemLink href="https://blog.lido.fi/">Blog</FooterItemLink>
      <FooterItemText>Some text</FooterItemText>
    </FooterGroup>

    <FooterGroup>
      <FooterTitle>Contacts</FooterTitle>
      <FooterItemLink href="mailto:info@lido.fi">info@lido.fi</FooterItemLink>
      <FooterItemLink href="https://help.lido.fi/">Help Center</FooterItemLink>
      <FooterItemText>Some text</FooterItemText>
    </FooterGroup>
  </FooterStyle>
);

export default Footer;
