class PageTemplate {
  headHTML() {
    return `<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>`;
  }

  headerHTML() {
    return `<header>
        <img src = "#" alt = "Logo">
    <nav>
    <a href = "/">Home</a>
    <a href = "/about">About</a>
    <a href = "/services">Services</a>
    <a href = "/contact">Contact</a>
    </nav>
</header>`;
  }

  mainHTML() {
    return `
    <h1>Some page</h1>
    <p>Lorem impsum fwwjhsmb gfhu</p>
`;
  }

  footerHTML() {
    return `<footer>
    <p>All rights</p>
    </footer>`;
  }
  render() {
    return ` <!DOCTYPE html>
<html lang="en">
${this.headHTML()}
<body>
    ${this.headerHTML()}
    <main>
${this.mainHTML()}
</main>
    ${this.footerHTML()}
</body>
</html>
`;
  }
}

export { PageTemplate };
