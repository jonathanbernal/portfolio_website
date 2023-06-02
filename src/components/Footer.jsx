function Footer() {
  const date = new Date();

  return (
    <footer className="footer">
      <small>Copyright {date.getFullYear()}. Made by Jonathan Bernal</small>
    </footer>
  )
}

export default Footer;