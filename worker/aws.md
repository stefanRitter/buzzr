
# get software
sudo apt-get install -y git-core
wget -qO- https://toolbelt.heroku.com/install-ubuntu.sh | sh
sudo apt-get update
sudo apt-get install -y python-software-properties python g++ make
sudo add-apt-repository ppa:chris-lea/node.js
sudo apt-get update
sudo apt-get install -y nodejs

# setup heroku
heroku login
heroku plugins:install git://github.com/ddollar/heroku-config.git


# setup git
git config --global user.name stefanritter
git config --global user.email stefan@stefanritter.com
git config --global color.ui true


# auth github
ssh-keygen -t rsa -C stefan@stefanritter.com
cat ~/.ssh/id_rsa.pub
# copy key into github account


# setup repo
git clone git@github.com:stefanRitter/buzzr.git
git remote add origin git@github.com:stefanRitter/buzzr.git
heroku git:remote -a buzzr3
heroku config:pull --overwrite --interactive
npm install
bower install

# connect
ssh -i innsbruck-ubuntu.pem ubuntu@54.72.83.88