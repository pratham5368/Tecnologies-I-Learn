## HTTPS
HTTPS is a secure way to send data between a web server and a browser.

A communication through HTTPS starts with the handshake phase during which the server and the client agree on how to encrypt the communication, in particular they choose an encryption algorithm and a secret key. After the handshake all the communication between the server and the client will be encrypted using the agreed upon algorithm and key.

The handshake phase uses a particular kind of cryptography, called asymmetric cryptography, to communicate securely even though client and server have not yet agreed on a secret key. After the handshake phase the HTTPS communication is encrypted with symmetric cryptography, which is much more efficient but requires client and server to both have knowledge of the secret key.

## OWASP Security Risks
OWASP or Open Web Application Security Project is an online community that produces freely-available articles, methodologies, documentation, tools, and technologies in the field of web application security.
## Cors
Cross-Origin Resource Sharing (CORS) is an HTTP-header based mechanism that allows a server to indicate any origins (domain, scheme, or port) other than its own from which a browser should permit loading resources.

![](https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS/cors_principle.png)

### What requests use CORS?
This cross-origin sharing standard can enable cross-origin HTTP requests for:

- Invocations of the XMLHttpRequest or Fetch APIs, as discussed above.
- Web Fonts (for cross-domain font usage in @font-face within CSS), so that servers can deploy TrueType fonts that can only be loaded cross-origin and used by websites that are permitted to do so.
- WebGL textures.
- Images/video frames drawn to a canvas using drawImage().
- CSS Shapes from images.

## SSL/TLS
Secure Sockets Layer (SSL) and Transport Layer Security (TLS) are cryptographic protocols used to provide security in internet communications. These protocols encrypt the data that is transmitted over the web, so anyone who tries to intercept packets will not be able to interpret the data. One difference that is important to know is that SSL is now deprecated due to security flaws, and most modern web browsers no longer support it. But TLS is still secure and widely supported, so preferably use TLS.
### What is an SSL certificate?
SSL can only be implemented by websites that have an SSL certificate (technically a "TLS certificate"). An SSL certificate is like an ID card or a badge that proves someone is who they say they are. SSL certificates are stored and displayed on the Web by a website's or application's server.

One of the most important pieces of information in an SSL certificate is the website's public key. The public key makes encryption and authentication possible. A user's device views the public key and uses it to establish secure encryption keys with the web server. Meanwhile the web server also has a private key that is kept secret; the private key decrypts data encrypted with the public key.

Certificate authorities (CA) are responsible for issuing SSL certificates.
### What are the types of SSL certificates?
There are several different types of SSL certificates. One certificate can apply to a single website or several websites, depending on the type:

- Single-domain: A single-domain SSL certificate applies to only one domain (a "domain" is the name of a website, like www.cloudflare.com).
- Wildcard: Like a single-domain certificate, a wildcard SSL certificate applies to only one domain. However, it also includes that domain's subdomains. For example, a wildcard certificate could cover www.cloudflare.com, blog.cloudflare.com, and developers.cloudflare.com, while a single-domain certificate could only cover the first.
- Multi-domain: As the name indicates, multi-domain SSL certificates can apply to multiple unrelated domains.
- SSL certificates also come with different validation levels. A validation level is like a background check, and the level changes depending on the thoroughness of the check.

- Domain Validation: This is the least-stringent level of validation, and the cheapest. All a business has to do is prove they control the domain.
- Organization Validation: This is a more hands-on process: The CA directly contacts the person or business requesting the certificate. These certificates are more trustworthy for users.
- Extended Validation: This requires a full background check of an organization before the SSL certificate can be issued.

## Content Security Policy
Content Security Policy is a computer security standard introduced to prevent cross-site scripting, clickjacking and other code injection attacks resulting from execution of malicious content in the trusted web page context.

## Server Security
Learn about the security of your server and how to secure it. Here are some of the topics off the top of my head:

- Use a firewall: One of the most effective ways to secure a server is to use a firewall to block all unnecessary incoming traffic. You can use iptables on Linux systems or a hardware firewall to do this.
- Close unnecessary ports: Make sure to close any ports that are not needed for your server to function properly. This will reduce the attack surface of your server and make it more difficult for attackers to gain access.
- Use strong passwords: Use long, complex passwords for all of your accounts, and consider using a password manager to store them securely.
- Keep your system up to date: Make sure to keep your operating system and software up to date with the latest security patches. This will help to prevent vulnerabilities from being exploited by attackers.
- Use SSL/TLS for communication: Use Secure Sockets Layer (SSL) or Transport Layer Security (TLS) to encrypt communication between your server and client devices. This will help to protect against man-in-the-middle attacks and other types of cyber threats.
- Use a intrusion detection system (IDS): An IDS monitors network traffic and alerts you to any suspicious activity, which can help you to identify and respond to potential threats in a timely manner.
- Enable two-factor authentication: Two-factor authentication adds an extra layer of security to your accounts by requiring a second form of authentication, such as a code sent to your phone, in addition to your password.

