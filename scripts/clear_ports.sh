
echo 'attempting to close ports'
sudo killall -9 node
echo 'ports test:'
sudo lsof -i tcp:3000 



 