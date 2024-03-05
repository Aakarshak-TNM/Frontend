
# clean codedeploy-agent files for a fresh install
sudo rm -rf /home/ubuntu/install

# install CodeDeploy agent
sudo apt-get -y update
sudo apt-get -y install ruby
sudo apt-get -y install wget
cd /home/ubuntu
wget https://aws-codedeploy-us-east-1.s3.amazonaws.com/latest/install
sudo chmod +x ./install 
sudo ./install auto

# update os & install python3
sudo apt-get update

# delete app
sudo rm -rf /home/ubuntu/Frontend

