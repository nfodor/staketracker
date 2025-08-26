# 🚀 ColdStart

## *Finally, a fair way to track and reward early contributors before the money shows up*

[![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=flat&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Node.js](https://img.shields.io/badge/Node.js-43853D?style=flat&logo=node.js&logoColor=white)](https://nodejs.org/)
[![PostgreSQL](https://img.shields.io/badge/PostgreSQL-316192?style=flat&logo=postgresql&logoColor=white)](https://postgresql.org/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)

---

## The Problem That Started It All

**Ever been part of an early-stage project where everyone contributed time, ideas, and sweat equity... only to watch it become valuable later while early contributors got nothing?**

We've all been there:
- 🤝 You help a friend build their startup idea for months
- 💡 You contribute crucial early work when there's no money for payment  
- 📈 The project takes off, gets funding, or starts making revenue
- 😞 New hires get paid while your early contributions are forgotten
- ⚖️ No legal framework existed to track what you were owed

**ColdStart solves this once and for all.**

---

## What ColdStart Does

ColdStart is a **pre-incorporation equity management system** that tracks every contribution to early-stage projects and ensures **historical contributors get compensated first** when value materializes.

### 🎯 Core Philosophy: "Early Risk Deserves Early Reward"

Like Bitcoin's finite supply model, ColdStart uses **anti-inflationary stake allocation**:
- Early contributors get more stakes for the same work
- Later contributors get fewer stakes (when risk is lower)
- Creates natural scarcity that rewards early participation
- When compensation becomes available, **past contributors get paid first**

### 💰 The "Backpay Queue" System

```
Project reaches $100K value:
┌─────────────────────────────────────────────────┐
│ Historical Contributors (Months 1-12)          │
│ • Alice: 500 stakes → Gets $5,000 FIRST       │
│ • Bob: 300 stakes → Gets $3,000 FIRST          │ 
│ • Carol: 200 stakes → Gets $2,000 FIRST        │
│ Total Historical Debt: $10,000 (10% of value)  │
└─────────────────────────────────────────────────┘

Remaining $90,000 available for:
• Current operations  
• New contributor compensation
• Growth investment
• Founder distribution

New contributors only get paid AFTER historical debt is cleared.
```

---

## Why This Matters

### 🏗️ **For Project Creators**
- **Attract top talent** without cash by offering verifiable future stakes
- **Build contributor networks** through hierarchical relay system  
- **Investor-friendly** - historical work doesn't consume fresh capital
- **Legal protection** with built-in compliance guidance

### 👩‍💻 **For Contributors** 
- **Your work is never forgotten** - immutable contribution records
- **Fair compensation** when projects succeed
- **Portfolio view** of stakes across all projects you've helped
- **Network building** - invite others and share stakes as sub-host

### 💼 **For Investors**
- **Clean cap table** - your money funds growth, not past work
- **Transparent history** of who built what when
- **Reduced founder/contributor conflicts** 
- **Professional documentation** ready for due diligence

---

## Key Features

### 🔒 **Immutable Contribution Tracking**
Every task, milestone, and contribution is permanently recorded with timestamps, value assignments, and proof of completion.

### 📊 **Dual-Role Dashboard System**
- **"My Contributions"** - View stakes earned across all projects
- **"My Projects"** - Manage projects you've created and contributor networks
- Easy switching between contributor and creator modes

### 🌳 **Hierarchical Relay System** 
- Contributors can become sub-hosts and invite their own teams
- Over-allocate stakes to enable network building
- Multi-level invitation trees with proportional distribution
- Organic team scaling through incentivized delegation

### 💱 **Flexible Compensation Conversion**
Projects configure how stakes convert to value:
- **Revenue-to-Cash**: Direct payments from project income
- **Investment-to-Equity**: Automatic equity conversion when funded
- **Token Allocation**: Conversion to project-specific tokens
- **Hybrid Models**: Multiple conversion types based on success milestones

### ⚖️ **MCP Legal Integration**
- Automatic jurisdiction detection for all participants
- Real-time compliance checking against local regulations
- Regulatory impact assessment (securities law, employment law, tax)
- Compliance audit preparation and documentation
- Multi-jurisdiction support for global teams

### 🌍 **Complete Project Transparency**
Before accepting any invitation, contributors see:
- Full execution terms and success criteria
- All available compensation conversion options
- Risk factors and potential legal implications
- Estimated stake values under different scenarios
- Complete governance model and decision-making process

---

## How It Works

### 1. **Project Creation**
```typescript
// Create project with finite stake pool and conversion rules
const project = {
  name: "Revolutionary AI Startup",
  stakePool: 10000, // Finite supply creates scarcity
  compensationRules: {
    availableConversions: ['revenue-cash', 'investment-equity'],
    investorProtection: true, // Keeps investor funds separate
    automaticConversion: false // Manual triggers for control
  }
}
```

### 2. **Contribution Tracking**
```typescript  
// Every milestone tracked with anti-inflationary allocation
const milestones = [
  { month: 1, effort: "40 hours", stakes: 400 }, // Early = more stakes
  { month: 6, effort: "40 hours", stakes: 200 }, // Later = fewer stakes  
  { month: 12, effort: "40 hours", stakes: 100 } // Latest = least stakes
]
```

### 3. **Value Realization**
```typescript
// When project generates value, historical debt gets priority
const compensation = {
  totalValue: 100000,
  historicalDebt: calculateDebt(allContributors), // Paid FIRST
  remainingValue: totalValue - historicalDebt,    // Available for new work
  paymentOrder: ['historical', 'current', 'future'] // Priority queue
}
```

---

## Getting Started

### 🏃‍♂️ Quick Start

```bash
# Clone the repository
git clone https://github.com/nfodor/coldstart.git
cd coldstart

# Install dependencies
npm install

# Set up environment
cp .env.example .env

# Run database migrations
npm run db:migrate  

# Start development server
npm run dev
```

### 🐳 Docker Setup

```bash
# Run with Docker Compose
docker-compose up -d

# The app will be available at http://localhost:3000
```

---

## Roadmap

### 🎯 **Version 1.0: MVP Foundation** (Q1 2025)
- [x] Core project and milestone tracking
- [x] Anti-inflationary stake allocation  
- [x] Dual-role dashboard system
- [ ] Email-based invitation system
- [ ] Basic compensation conversion rules
- [ ] Project terms transparency

### 🚀 **Version 1.5: Relay System** (Q2 2025)
- [ ] Hierarchical delegation functionality
- [ ] Sub-host invitation system
- [ ] Network tree visualization
- [ ] Multi-level stake distribution

### 💼 **Version 2.0: Professional Features** (Q3 2025)
- [ ] MCP legal integration
- [ ] Advanced compliance checking
- [ ] GitHub/Slack integrations
- [ ] Legal template generation
- [ ] Multi-currency support

### 🌍 **Version 3.0: Global Scale** (Q4 2025)
- [ ] Mobile applications
- [ ] Multi-language support
- [ ] Advanced analytics
- [ ] Cross-border compliance

---

## The Vision

**ColdStart isn't just about tracking contributions - it's about fundamentally changing how early-stage value creation works.**

We envision a world where:
- 🤝 **Collaboration happens naturally** without complex legal structures
- 💡 **Great ideas get built** because contributors trust they'll be rewarded
- 📈 **Value flows fairly** to those who took the earliest risks
- 🌱 **Innovation accelerates** through better incentive alignment

### Real-World Impact

**Startup Founders**: Build amazing teams before you have money to pay them  
**Talented Contributors**: Get fairly compensated for early-stage risk-taking  
**Innovation Ecosystem**: More projects succeed through better collaboration  
**Legal/Financial Systems**: Smooth transition from informal to formal structures

---

## Contributing

We believe in practicing what we preach! All contributions to ColdStart itself are tracked using ColdStart, ensuring contributors get recognition and potential value when the project succeeds.

### 🤝 How to Contribute

1. **Join our ColdStart project** at [app.coldstart.dev](https://app.coldstart.dev)
2. **Review open issues** and claim milestones that match your skills
3. **Submit PRs** with clear milestone completion evidence  
4. **Earn stakes** in ColdStart's success as a contributor

### 📋 Development Process

```bash
# Fork and clone
git clone https://github.com/yourusername/coldstart.git

# Create feature branch
git checkout -b feature/amazing-feature

# Make changes and commit
git commit -m "Add amazing feature"

# Push and create PR
git push origin feature/amazing-feature
```

All contributors agree to ColdStart's own contribution tracking terms, creating a real-world validation of our system.

---

## License

MIT License - see [LICENSE](LICENSE) file for details.

---

## Support & Community

- 💬 **Discord**: [Join our community](https://discord.gg/coldstart)
- 📧 **Email**: hello@coldstart.dev  
- 🐦 **Twitter**: [@ColdStartHQ](https://twitter.com/ColdStartHQ)
- 📖 **Documentation**: [docs.coldstart.dev](https://docs.coldstart.dev)
- 🐛 **Issues**: [GitHub Issues](https://github.com/nfodor/coldstart/issues)

---

## Recognition

*ColdStart was born from the frustration of watching talented people contribute to early-stage projects without fair compensation when those projects succeeded. We're building the system we wish existed for every project we've ever contributed to.*

**Finally, early contributors get what they deserve. 🚀**

---

<div align="center">

### ⭐ Star this repo if you believe early contributors deserve fair compensation!

[⭐ Star](https://github.com/nfodor/coldstart) • [🍴 Fork](https://github.com/nfodor/coldstart/fork) • [📖 Docs](SPECIFICATION.md) • [🐛 Issues](https://github.com/nfodor/coldstart/issues)

</div>