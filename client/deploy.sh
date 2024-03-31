echo "Building app..."
npm run build

echo "Deploying files to server..."
scp -r build/* cv@10.29.8.31:~/myPmsmApp/build/

echo "Deployed!"