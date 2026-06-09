import Link from 'next/link';
import { site } from '../content/site';
import { authLinks } from '../content/nav';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__top">
          <div className="footer__brandBlock">
            <div className="footer__brand">
              {site.name}
            </div>

            <p className="footer__desc">
              {site.longDescriptor}
            </p>
          </div>

          <div className="footer__grid">
            <div className="footer__col">
              <h4>Courses</h4>

              <ul>
                <li>
                  <a href="#courses">All courses</a>
                </li>

                <li>
                  <a href="#about">How it works</a>
                </li>

                <li>
                  <a href="#lead">Get course details</a>
                </li>
              </ul>
            </div>

            <div className="footer__col">
              <h4>Premium</h4>

              <ul>
                <li>
                  <a href="#premium">Membership benefits</a>
                </li>

                <li>
                  <a href="#news">Financial news</a>
                </li>

                <li>
                  <a href="#plans">Plans</a>
                </li>
              </ul>
            </div>

            <div className="footer__col">
              <h4>Legal</h4>

              <ul>
                <li>
                  <Link href="/termsofservice">
                    Terms of Service
                  </Link>
                </li>

                <li>
                  <Link href="/privacypolicy">
                    Privacy Policy
                  </Link>
                </li>

                <li>
                  <Link href="/refundpolicy">
                    Refund Policy
                  </Link>
                </li>
              </ul>
            </div>

            <div className="footer__col">
              <h4>Stay informed</h4>

              <ul>
                <li>
                  <a href="#lead">Newsletter signup</a>
                </li>

                {/* <li>
                  <a href={`mailto:${site.contactEmail}`}>
                    {site.contactEmail}
                  </a>
                </li> */}

                <li>
                  <a href={authLinks.signIn.href}>
                    Sign in
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="footer__divider" />

        <p className="footer__disclaimer">
          {site.disclaimer}
        </p>

        <div className="footer__bottom">
          <span>
            © {new Date().getFullYear()} {site.name}.{' '}
            {site.descriptor}
          </span>

          {/* <div className="footer__bottomLinks">
            <Link href="/termsofservice">
              Terms
            </Link>

            <Link href="/privacypolicy">
              Privacy
            </Link>

            <Link href="/refundpolicy">
              Refunds
            </Link>
          </div> */}
        </div>
      </div>
    </footer>
  );
}