function Footer() {
  const date = new Date();

  return (
    <footer>
      <small>Copyright {date.getFullYear()}. Made by Jonathan Bernal</small>
    </footer>
  )
}

export default Footer;