const Footer = () => {
  return (
    <footer className="footer">
      <div className="inner-footer">
        <div className="one-footer-section">
          <div className="footer-section-title">Learn More</div>
          <a
            className="one-footer-info"
            href="https://iogoods.de/"
            target="_blank"
            rel="noreferrer"
          >
            IO Features
          </a>
          <a
            className="one-footer-info"
            href="https://iogoods.de/"
            target="_blank"
            rel="noreferrer"
          >
            Community
          </a>
          <a
            className="one-footer-info"
            href="https://iogoods.de/coin/"
            target="_blank"
            rel="noreferrer"
          >
            IO Coin
          </a>
<a
            className="one-footer-info"
            href="https://prod-api.iogoods.de:4000/api-docs/"
            target="_blank"
            rel="noreferrer"
          >
            Explorer API
          </a>
        </div>
        <div className="one-footer-section">
          <div className="footer-section-title">Follow our News</div>
          <a
            className="one-footer-info"
            href="https://iogoods.de/"
            target="_blank"
            rel="noreferrer"
          >
            Last IO News
          </a>
          <a
            className="one-footer-info"
            href="https://discord.gg/"
            target="_blank"
            rel="noreferrer"
          >
            Discord
          </a>
          <a
            className="one-footer-info"
            href="https://t.me/"
            target="_blank"
            rel="noreferrer"
          >
            Telegram
          </a>
        </div>
        <div className="one-footer-section">
          <div className="footer-section-title">Keep updated</div>
          <a
            href="https://twitter.com/iogoods"
            target="_blank"
            rel="noreferrer"
            className="social-icon twitter-icon"
            title="Twitter"
          >
            {" "}
          </a>
          <a
            href="https://github.com/iogoods/explorer-frontend"
            target="_blank"
            rel="noreferrer"
            className="social-icon github-icon"
            title="GitHub"
          >
            {" "}
          </a>
          <a
            href="mailto:service@iogoods.de"
            target="_blank"
            rel="noreferrer"
            className="social-icon email-icon"
            title="Email"
          >
            {" "}
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
