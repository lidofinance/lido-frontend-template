ssh -p $SSH_PORT -T $SSH_USER@$SSH_HOST <<EOA
ssh -T $SSH_NESTED_HOST <<EOB
cd /srv/polido-frontend && git pull && docker-compose build polido-frontend && docker-compose up -d --build polido-frontend
EOB
EOA