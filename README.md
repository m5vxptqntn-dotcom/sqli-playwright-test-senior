# SQLI QA Automation Test

## 🚀 Tech Stack
- Playwright
- TypeScript
- API + UI Testing

## 📁 Project Structure
- tests/web → UI automation
- tests/api → API automation
- pages → Page Object Model
- utils → data processing

## ▶️ How to run

npm install  
npx playwright install  
npm test  

## 🧪 Test Coverage

### Web Test
- Google search
- Wikipedia validation
- Extract automation year

### API Test
- Create user
- Retrieve user
- Extract sold pets
- Analyze name frequency

## ⚠️ Notes
- Public API may be unstable (Swagger Petstore)
- Added resilience to handle failures

## 🔧 Improvements (future)
- CI/CD pipeline
- Mock API
- Better selectors
