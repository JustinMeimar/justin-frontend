### My Quick and Simple Home Server Recipe

###### *July 11th 2023*


--- 

#### Ingredients
1. `Linux machine (preferably low power)`
2. `Router`
3. `Your Domain Name`
4. `Duck DNS` 
5. `NGINX`
--- 
#### Set up
Install Ubuntu Server 22.04 as server OS, NGINX and OpenSSH. I grabbed a domain name 
from porkbun.com. They offer free lifetime SSL for each domain.

--- 
#### Dynamic DNS
Most home routers don't have a static public IP, so we need to use dynamic DNS. The free service DuckDNS is great. This way you can keep your domain to your public IP address, even after it changes.
\
\
Then to use your own domain, set up an alias record pointing at your duckDNS domain. 

---
#### Port Forwarding
Setup port-forwarding in your router to direct traffic from ports 443 (HTTPS), 80 (HTTP), and a random port above 1024 for SSH to your server's static IP address.

You can find your servers static IP using `ip a`. Check on your machine that forwarded ports aren't blocked with `ufw`. Test by serving an HTTP route.

---
#### NGINX
Set up NGINX to reverse proxy traffic to either frontend or backend depending on the URL. 
For my setup, any request starting with `/api/` is sent to the backend, while every other is managed by the React Router

---
### SSL 
Remember those free SSL keys you were promised with porkbun? Now they can be saved in `/etc/nginx/ssl/` and
source into your NGINX configuration file! Its convinient to let NGINX handle SSL your reverse proxies, then your site can operate as if being hosted locally.

---
### Conclusion
Now you should be abled to access your homeserver through HTTPS!