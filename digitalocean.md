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

