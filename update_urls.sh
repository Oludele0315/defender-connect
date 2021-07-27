sudo curl -o /etc/squid/MDE.destinations.dl https://raw.githubusercontent.com/microsoft/defender-connect/main/MDE.destinations
if cmp -s "/etc/squid/MDE.destinations.dl" "/etc/squid/MDE.destinations"
then
     echo "The files match, I'm not going to do anything"
else
     echo "The files are different so I'm going to replace the Squid file"
     sudo cp /etc/squid/MDE.destinations.dl /etc/squid/MDE.destinations
     echo "Restarting Squid"
     sudo squid -k reconfigure
     echo "Done"
fi
