// PAC file to include in overall PAC file for your environment, or to use specifically to download Windows/Defender updates through Defender Connect
function FindProxyForURL(url, host)
 {
if (host == "windowsupdate.microsoft.com") ||
(dnsDomainIs(host, ".windowsupdate.microsoft.com")) ||
(host == "update.microsoft.com") ||
(dnsDomainIs(host, ".update.microsoft.com")) ||
(dnsDomainIs(host, ".windowsupdate.com")))
{
return 'PROXY 192.168.0.10:3128';
}
