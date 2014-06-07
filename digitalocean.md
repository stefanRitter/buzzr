# create ssh keys
ssh-keygen -t rsa -C "stefan@stefanritter.com"
cat ~/.ssh/id_rsa.pub

# connect
ssh root@188.226.212.53

# git
sudo apt-get update
sudo apt-get install -y git-core

# node
sudo add-apt-repository ppa:chris-lea/node.js [ENTER]
sudo apt-get update
sudo apt-get install -y nodejs

# global packages
sudo npm install bower -g
sudo npm install grunt-cli -g
sudo npm install forever -g


# nginx
sudo apt-get update
sudo apt-get install -y nginx

sudo service nginx start
update-rc.d nginx defaults

# config nginx
nano /etc/nginx/conf.d/buzzr.io.conf

server {
    listen 80;

    server_name buzzr.io;

    location / {
        proxy_pass http://localhost:3030;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
}


nano /etc/nginx/conf.d/fitguru.org.conf
server {
    listen 80;

    server_name fitguru.org;

    location / {
        proxy_pass http://localhost:3040;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
}