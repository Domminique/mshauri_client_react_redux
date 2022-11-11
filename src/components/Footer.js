import React from 'react'
//import { animateScroll as scroll } from 'react-scroll'
import {
  FaBars,
  FaFacebook,
  FaInstagram,
  FaYoutube,
  FaTwitter,
  FaLinkedin,
} from 'react-icons/fa'

import {
  FooterContainer,
  FooterWrap,
  FooterLinksContainer,
  FooterLinksWrapper,
  FooterLinkItems,
  FooterLinkTitle,
  FooterLink,
  SocialMedia,
  SocialMediaWrap,
  SocialLogo,
  WebsiteRights,
  SocialIcons,
  SocialIconLink,
} from './Footer/FooterElements'

const Footer = () => {
  const toggleHome = () => {
    // scroll.scrollToTop()
  }
  return (
    <FooterContainer>
      <FooterWrap>
        <FooterLinksContainer>
          <FooterLinksWrapper>
            <FooterLinkItems>
              <FooterLinkTitle> About Us</FooterLinkTitle>
              <FooterLink to='# '>How it works</FooterLink>
              <FooterLink to='# '>Testimonials</FooterLink>
              <FooterLink to='# '>Careers</FooterLink>
              <FooterLink to='#'>Blog</FooterLink>
              <FooterLink to=' #'>Terms of Service</FooterLink>
            </FooterLinkItems>
            <FooterLinkItems>
              <FooterLinkTitle> Contact Us</FooterLinkTitle>
              <FooterLink to='#'>Contact</FooterLink>
              <FooterLink to='#'>Support</FooterLink>
              <FooterLink to='# '>Countries</FooterLink>
              <FooterLink to='#'>Sponsorships</FooterLink>
            </FooterLinkItems>
          </FooterLinksWrapper>
          <FooterLinksWrapper>
            <FooterLinkItems>
              <FooterLinkTitle> Our Customers</FooterLinkTitle>
              <FooterLink to='#'>HR and L&D Leads</FooterLink>
              <FooterLink to='#'> Community Managers</FooterLink>
              <FooterLink to='#'>Charity</FooterLink>
              <FooterLink to='# '>Non-profit</FooterLink>
            </FooterLinkItems>
            <FooterLinkItems>
              <FooterLinkTitle> Business</FooterLinkTitle>
              <FooterLink to='/register '>Project managers</FooterLink>
              <FooterLink to='/register'>Mentors</FooterLink>
              <FooterLink to='/register'>Mentees</FooterLink>
              <FooterLink to='/register'>Add Organization</FooterLink>
            </FooterLinkItems>
          </FooterLinksWrapper>
        </FooterLinksContainer>

        <SocialMedia>
          <SocialMediaWrap>
            <p>Mshauri</p>

            <WebsiteRights>
              {' '}
              Mshauri {new Date().getFullYear()} All rights reserved
            </WebsiteRights>
            <SocialIcons>
              <SocialIconLink
                href='https://www.facebook.com//'
                target='_blank '
                arial-label='Facebook'
              >
                {' '}
                <FaFacebook />
              </SocialIconLink>
              <SocialIconLink href='/' target='_blank ' arial-label='Instagram'>
                <FaInstagram />
              </SocialIconLink>
              <SocialIconLink
                href='https://www.youtube.com/'
                target='_blank '
                arial-label='Youtube'
              >
                {' '}
                <FaYoutube />
              </SocialIconLink>
              <SocialIconLink
                href='https://www.twitter.com// '
                target='_blank '
                arial-label='Twitter'
              >
                {' '}
                <FaTwitter />
              </SocialIconLink>
              <SocialIconLink
                href='https://www.linkedin.com/company//'
                target='_blank '
                arial-label='LinkedIn'
              >
                {' '}
                <FaLinkedin />
              </SocialIconLink>
            </SocialIcons>
          </SocialMediaWrap>
        </SocialMedia>
      </FooterWrap>
    </FooterContainer>
  )
}

export default Footer
