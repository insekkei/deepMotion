echo "=========================update code begin========================="
git pull

echo "=========================update code success, install node_modules begin========================="
npm install

echo "=========================stopall========================="
npm run stopall

echo "=========================complete stopall, checkstatus:========================="
npm run checkstatus

echo "=========================install node_modules success, release begin========================="
npm run release

echo "=========================release success, start forever========================="
npm start

echo "=========================forever started! checkstatus========================="
npm run checkstatus
