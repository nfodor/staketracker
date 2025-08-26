# ColdStart: Decentralized Contribution & Equity Tracking System

## General Purpose & Problem Statement

ColdStart addresses the fundamental challenge of fairly rewarding early-stage contributors to projects before formal business structures, funding, or legal frameworks are established. The core problem is:

**"How do you fairly track, allocate, and eventually distribute value to contributors in pre-formal projects where traditional equity/compensation structures don't yet exist?"**

### Core Value Proposition:
**Build Collective Value → Enable Historical Compensation**

The ultimate goal is to create enough measurable value through trackable collective efforts so that when compensation becomes available (through funding, revenue, or other value realization), it flows **first to past contributors** based on their recorded stakes before going to new contributors. This creates a "backpay" system that rewards those who took the earliest risks and built the foundation.

### Primary Goals:
1. **Historical Debt Recognition**: Track all past contributions as "compensation debt" to be paid when value materializes
2. **Fair Value Attribution**: Ensure all contributions are tracked with transparent, immutable records  
3. **Early Contributor Incentivization**: Reward early risk-takers more than later contributors (anti-inflationary model)
4. **Collective Value Building**: Focus efforts on creating enough total value to eventually compensate all contributors
5. **Network Effect Scaling**: Enable contributors to build sub-teams and distribute stakes hierarchically
6. **Future-Proof Documentation**: Create verifiable contribution records for eventual legal/financial conversion
7. **Priority Compensation Queue**: When value becomes available, pay historical contributors before new ones

### Target Use Cases:
- **Startup Pre-Incorporation**: Track founder and early employee contributions before company formation
- **Open Source Projects**: Reward contributors with verifiable stakes that could convert to tokens/equity
- **Creative Collaboratives**: Track artistic, creative, or intellectual contributions to joint projects
- **Research Initiatives**: Document academic or scientific collaboration efforts
- **Community Projects**: Manage volunteer contributions with potential future value
- **DAO Pre-Formation**: Establish contribution history before formal decentralized organization

## Overview

ColdStart is a system designed to track and record contributions to projects in an immutable, accountable way. It serves as a pre-incorporation/pre-funding equity management system where early contributors can accumulate verifiable stakes in projects that can later be converted to formal equity, shares, or monetary compensation.

## Core Concept

**Anti-Inflationary Stake Allocation**: Like Bitcoin's finite supply model, stakes are distributed from a finite pool where early contributors receive proportionally more value for the same effort than later contributors. This incentivizes early participation and fairly rewards risk-taking in unproven projects.

## Key Features

### 1. User Management
- **Registration**: Anyone can register with email verification
- **Invitation System**: Any registered user can invite others via email
- **Dual-Role System**: Users can simultaneously be both contributors and project creators
- **Separate Dashboard Views**: Contributors see their stakes earned; Creators see projects they manage
- **Role Context Switching**: Easy toggle between "My Contributions" and "My Projects" views

### 2. Project Management
- **Project Creation**: Users can create new projects with defined parameters
- **Milestone Definition**: Projects broken into clear phases/milestones
- **Progress Tracking**: Real-time visibility of project progress and stake allocation

### 3. Tradable Units System
- **Unit Dashboard**: Admin interface to define tradable units
- **Multiple Unit Types**: Support for currency, crypto tokens, equity points, etc.
- **Flexible Assignment**: Not all units need to be used for every contribution type

### 4. Contribution Tracking
- **Contribution Types**: Predefined dictionary of contribution categories
  - Development work
  - Design work
  - Business development
  - Marketing/PR
  - Legal/Administrative
  - Strategy/Planning
  - Capital injection
  - Network/Connections
- **Value Assignment**: Each contribution assigned value in relevant tradable units
- **Immutable Records**: All contributions permanently recorded

### 5. Milestone & Delivery System
- **Phase Definition**: Projects divided into deliverable phases
- **Assignment**: Project hosts assign contributors to specific milestones
- **Delivery Notification**: Contributors can notify hosts when work is complete
- **Approval Process**: Project hosts review and commit milestone completion
- **Stake Allocation**: Upon approval, predetermined stake value is allocated

### 6. Stake Tracking & Visualization
- **Dual Dashboard System**: 
  - **"My Contributions" View**: Stakes earned as a contributor across all projects
  - **"My Projects" View**: Projects owned/managed with stake distributions to others
- **Cross-Project Portfolio**: Unified view of all stakes earned as contributor
- **Project Management Panel**: Overview of all created projects and their contributor networks
- **Historical Records**: Complete audit trail separated by contributor vs. creator activities
- **Future Value Projections**: Estimated value for both earned stakes and project ownership

### 7. Relay & Branch Distribution System
- **Over-Allocation**: Assign more stakes than task value to enable relay functionality
- **Sub-Host Creation**: Relay recipients can invite and manage their own contributors
- **Hierarchical Management**: Multi-level invitation trees with stake distribution at each level
- **Proportional Control**: Relay hosts decide how to split their allocated stakes
- **Network Effects**: Encourages building contributor networks and teams

### 8. Flexible Compensation Conversion System
- **Project-Defined Conversion Rules**: Each project specifies which compensation types are available
- **Multiple Value Conversion Options**:
  - **Revenue-to-Cash**: Stakes convert to cash payments from project revenue
  - **Investment-to-Equity**: Stakes automatically convert to equity shares when investment occurs
  - **Token Allocation**: Stakes convert to project-specific tokens
  - **Hybrid Models**: Combinations of above based on project success milestones
- **Conversion Triggers**: Automatic or manual conversion based on project settings
- **Investor-Friendly Options**: Separate investor capital from historical work compensation

### 9. Complete Project Terms Transparency
- **Full Execution Terms Visible**: All project conditions, compensation rules, and conversion options shown before acceptance
- **High-Grade Execution Criteria**: Clear definition of what constitutes successful project completion
- **Stakeholder Management Dashboard**: Comprehensive view of all project participants, roles, and stakes
- **Terms Evolution Tracking**: Historical record of any changes to project terms
- **Acceptance Confirmation**: Explicit agreement required for all compensation conversion rules

### 10. MCP Legal Guidance & Compliance System
- **Legal Footprint Analysis**: Automatic detection of party jurisdictions and applicable regulations
- **Real-Time Compliance Checking**: MCP-powered analysis of project structure against local laws
- **Regulatory Impact Assessment**: Proactive identification of securities law, employment law, and tax implications
- **Compliance Audit Readiness**: Automated preparation of documentation for regulatory reviews
- **Legal Recommendation Engine**: Context-aware suggestions for structure optimization
- **Multi-Jurisdiction Support**: Handle cross-border projects with complex regulatory landscapes
- **Risk Mitigation Guidance**: Specific recommendations to reduce legal exposure

## Anti-Inflationary Mechanics

### Finite Pool Concept
- Each project starts with a finite "stake pool" (e.g., 10,000 points)
- Early milestones consume less of the pool for the same work value
- Later milestones require more pool allocation for equivalent effort
- This creates natural scarcity and rewards early risk-taking

### Historical Compensation Priority
- **Backpay Queue**: All past contributions create a "compensation debt" that must be settled first
- **New Contributor Wait**: Fresh contributors only get paid after historical debt is cleared
- **Value Threshold**: Projects must generate enough value to start paying historical contributors
- **Proportional Distribution**: When compensation begins, it's distributed proportionally to stake holdings
- **Debt-to-Equity Conversion**: Historical stakes convert to formal equity/payments when value materializes

### Implementation Example
```
Project Pool: 10,000 stakes
Milestone 1 (Month 1): 1 hour = 10 stakes (1000 stakes available)
Milestone 5 (Month 5): 1 hour = 5 stakes (500 stakes remaining) 
Milestone 10 (Month 10): 1 hour = 2 stakes (200 stakes remaining)
```

### Historical Compensation Example
```
Project reaches $100,000 value after 12 months:

Historical Contributors (Months 1-12):
- Alice: 500 stakes (5% of total) → Gets $5,000 first
- Bob: 300 stakes (3% of total) → Gets $3,000 first  
- Carol: 200 stakes (2% of total) → Gets $2,000 first
- Total Historical Debt: $10,000 (10% of value)

Remaining Value: $90,000 available for:
- Current operations
- New contributor compensation
- Growth investment
- Founder/creator distribution

New contributors can only be compensated from the remaining $90,000
until all historical debt ($10,000) is fully paid.
```

### Relay/Branch System
- **Over-Allocation**: Invitees can be assigned more reward value than the task requires
- **Relay Mechanism**: Extra stakes enable invitees to become sub-project hosts
- **Branching Network**: Relay invitees can invite and assign stakes to their own contributors
- **Hierarchical Distribution**: Creates a tree-like structure where each node can distribute stakes to lower levels
- **Proportional Sharing**: Relay hosts keep a portion and distribute remainder to their invitees

## Competitive Analysis & Market Positioning

### Existing Systems with Similar Goals

#### 1. **Cap Table Management** (Carta, Capshare, Eqvista)
**What they do**: Manage equity ownership and employee stock options for incorporated companies
**Strengths**: 
- Legal compliance and documentation
- Integration with accounting systems
- Professional valuation services
**Limitations**:
- Requires formal incorporation
- High costs and complexity
- No pre-incorporation tracking
- Limited to traditional equity structures

#### 2. **Contributor Reward Platforms** (Gitcoin, SourceCred, Coordinape)
**What they do**: Reward open-source contributors with tokens or grants
**Strengths**:
- Decentralized token distribution
- Community governance
- Integration with development platforms
**Limitations**:
- Limited to specific ecosystems (mainly crypto/open-source)
- No hierarchical delegation
- Temporary reward model (not equity-building)
- Complex for non-technical users

#### 3. **Project Management + Time Tracking** (Toggl, Harvest, Clockify)
**What they do**: Track time spent on projects and generate billing/reports
**Strengths**:
- Detailed time tracking
- Project organization
- Reporting and analytics
**Limitations**:
- No stake/equity concept
- No contribution value weighting
- No future value projection
- Centralized control only

#### 4. **DAO Tools** (Aragon, DAOstack, Colony)
**What they do**: Create and manage decentralized autonomous organizations
**Strengths**:
- Decentralized governance
- Token-based voting and rewards
- Smart contract automation
**Limitations**:
- High technical barrier
- Expensive blockchain operations
- Complex governance structures
- Not suitable for pre-formal projects

#### 5. **Freelancer Platforms** (Upwork, Fiverr, Toptal)
**What they do**: Connect freelancers with projects and handle payments
**Strengths**:
- Established payment systems
- Rating and reputation tracking
- Wide user base
**Limitations**:
- Traditional payment only (no equity)
- No long-term stake building
- Platform-controlled relationship
- No team building or delegation

### ColdStart's Unique Positioning

#### **Key Differentiators:**

1. **Pre-Formal Focus**: Specifically designed for projects before incorporation/funding
2. **Anti-Inflationary Mechanism**: Early contributors automatically get better stake ratios
3. **Hierarchical Delegation**: Relay system enables network building and sub-team management
4. **Universal Tradable Units**: Support for any measurable value unit, not just currency
5. **Future-Convertible**: Stakes designed to convert to formal equity/tokens later
6. **Low Barrier Entry**: No technical knowledge, blockchain fees, or legal setup required
7. **Network Effects**: Encourages organic team building through relay incentives

### Identified Gaps in Current Market

#### **Missing Features in Existing Solutions:**

1. **Pre-Incorporation Equity Tracking**: No system bridges the gap between informal collaboration and formal business
2. **Anti-Inflationary Rewards**: Most systems use flat rates rather than scarcity-based incentives
3. **Hierarchical Contribution Networks**: No platform enables contributors to build and manage sub-teams
4. **Multi-Unit Value Systems**: Limited support for diverse value types beyond money/tokens
5. **Seamless Transition Path**: No clear route from informal tracking to formal legal structures
6. **Network Building Incentives**: No systems reward contributors for bringing in other contributors
7. **Cross-Project Portfolio View**: Contributors can't see their stakes across multiple projects
8. **Dispute Resolution for Pre-Formal**: No arbitration system for contribution disputes before legal frameworks

#### **Technical Gaps:**

1. **Immutable Yet Accessible**: Balance between blockchain immutability and user-friendly access
2. **Scalable Hierarchy Management**: Technical challenge of managing multi-level delegation trees
3. **Value Unit Flexibility**: Supporting arbitrary measurable units with conversion capabilities
4. **Audit Trail Completeness**: Full contribution history without overwhelming complexity
5. **Privacy vs Transparency**: Selective visibility for sensitive early-stage projects

#### **Market Gaps:**

1. **SMB/Startup Focus**: Most tools target either large enterprises or crypto-native users
2. **Non-Technical User Base**: Gap between complex DAO tools and simple time trackers
3. **Legal Integration Readiness**: No system prepares contribution data for legal formalization
4. **Multi-Cultural Support**: Limited consideration for different business cultures and legal systems
5. **Offline/Hybrid Work**: Limited support for contributions that aren't digital

### Competitive Advantages

ColdStart's design addresses these gaps by providing:
- **Simplicity**: Email-based invitations, web interface, no blockchain knowledge required
- **Flexibility**: Any contribution type, any value unit, any project structure  
- **Growth Incentives**: Anti-inflationary and relay systems reward network building
- **Future-Readiness**: Data structure designed for eventual legal/financial conversion
- **Accessibility**: Works for any project type, team size, or technical level

## Architecture Options

### Option 1: Centralized Database + Blockchain Anchoring
**Pros:**
- Fast development
- Low operational costs
- Simple UI/UX
- Can add blockchain later

**Cons:**
- Single point of failure
- Trust requirements
- Limited transparency

**Implementation:**
- PostgreSQL/MongoDB for main data
- Periodic blockchain anchoring for immutability
- RESTful API backend
- React/Vue frontend

### Option 2: Hybrid Blockchain Solution
**Pros:**
- High transparency
- Immutable records
- Decentralized verification
- Built-in token support

**Cons:**
- Higher complexity
- Gas costs
- Slower development
- Blockchain dependency

**Implementation:**
- Smart contracts for stake allocation
- IPFS for document storage
- Web3 frontend integration
- Layer 2 solution (Polygon, Arbitrum)

### Option 3: Event Sourcing + Distributed Ledger
**Pros:**
- Complete audit trail
- High reliability
- Scalable
- Blockchain-agnostic

**Cons:**
- Complex architecture
- Longer development time
- Higher operational complexity

**Implementation:**
- Event sourcing pattern
- Apache Kafka or similar
- Custom consensus mechanism
- Microservices architecture

## Development Roadmap & Version Planning

### Version 1.0: MVP Foundation (3-4 months)
**Goal**: Basic functional system for contribution tracking

#### **Core Infrastructure** (High Priority)
- Set up PostgreSQL database schema with audit logging
- Create Express.js API backend with OpenAPI documentation  
- Build React frontend with TypeScript and UI components
- Implement email verification and notification system

#### **Essential Features** (High Priority)
- User management (registration, authentication, profiles)
- Dual-role system with separate contributor/creator dashboard views
- Project creation with configurable compensation conversion rules
- Complete project terms transparency for invitees
- Contributor invitation system with explicit terms acceptance
- Basic milestone definition and tracking
- Simple stake allocation and visualization
- Compensation type configuration (revenue-cash, investment-equity, tokens)
- Project management dashboard with stakeholder overview
- Dashboard role switching between "My Contributions" and "My Projects"

#### **Success Criteria**:
- Users can register, create projects, invite contributors
- Basic milestone completion and stake allocation works
- Email notifications functional
- Simple but complete audit trail

### Version 1.5: Relay System (2-3 months)
**Goal**: Enable hierarchical delegation and network building

#### **Relay Features** (High Priority)
- Over-allocation capability for milestones
- Relay permission management system
- Sub-invitation functionality for relay hosts
- Hierarchical stake distribution tracking
- Multi-level contributor networks visualization

#### **Enhanced UI**
- Relay management dashboard
- Network tree visualization
- Sub-team management interface

#### **Success Criteria**:
- Contributors can become sub-hosts with delegated stakes
- Multi-level invitation trees work correctly
- Proportional stake distribution functions properly

### Version 2.0: Enhanced Features (4-5 months)
**Goal**: Professional-grade features and broader usability

#### **Tradable Units System** (Medium Priority)
- Tradable units dashboard for defining custom value types
- Multiple currency support with conversion rates
- Real-time value tracking and updates
- Portfolio analytics and projections

#### **Integration & APIs** (Medium Priority)
- GitHub integration for code contribution tracking
- Slack/Discord integration for team communication
- Export/import capabilities for data portability
- RESTful API for third-party integrations

#### **Legal & Compliance** (Medium Priority)
- Legal template generation for formal conversion
- Dispute resolution mechanisms
- Enhanced audit trails and compliance reporting
- MCP integration for automated legal guidance and compliance checking
- Multi-jurisdiction regulatory analysis and recommendations

#### **Success Criteria**:
- Multiple value units work seamlessly
- External tool integrations functional
- Legal conversion pathway available

### Version 2.5: Advanced Security & Analytics (2-3 months)
**Goal**: Enterprise-ready security and insights

#### **Advanced Security** (Medium Priority)
- Multi-signature approvals for high-stakes projects
- Enhanced access controls and permissions
- Data encryption and privacy controls
- Security audit trails

#### **Analytics & Insights** (Low Priority)
- Advanced analytics dashboard
- Contribution pattern insights
- Predictive value modeling
- Performance metrics and reporting

#### **Success Criteria**:
- Enterprise security standards met
- Rich analytics provide actionable insights
- System handles high-value projects safely

### Version 3.0: Mobile & Global Scale (3-4 months)
**Goal**: Mobile-first experience and global accessibility

#### **Mobile Applications** (Medium Priority)
- Native iOS and Android apps
- Mobile-optimized contribution tracking
- Push notifications for project updates
- Offline capability with sync

#### **Globalization** (Low Priority)
- Multi-language support for global teams
- Cultural adaptation for different business practices
- Multi-timezone handling
- Regional compliance considerations

#### **Success Criteria**:
- Full-featured mobile experience
- Global user base can use effectively
- Localization complete for major markets

### Version 4.0: Decentralization & Advanced Features (6+ months)
**Goal**: Blockchain integration and advanced ecosystem

#### **Blockchain Integration** (Low Priority)
- Periodic blockchain anchoring for immutability
- Smart contract deployment option
- Token-based stakes and governance
- Decentralized dispute resolution

#### **Advanced Ecosystem** (Low Priority)
- Cross-project stake trading marketplace
- Automated payout systems
- DAO creation tools
- Integration with existing legal frameworks

#### **Success Criteria**:
- Blockchain features optional but functional
- Ecosystem supports complex project structures
- Path to full decentralization available

### Development Priorities

#### **Immediate Focus (Months 1-4)**:
1. Database schema and core API
2. User authentication and project management
3. Basic stake tracking and email system
4. Simple but functional UI

#### **Short Term (Months 5-8)**:
1. Relay system implementation
2. Enhanced UI with network visualization
3. Basic integrations and export capabilities

#### **Medium Term (Months 9-18)**:
1. Tradable units and advanced features
2. Security enhancements
3. Mobile applications

#### **Long Term (Months 18+)**:
1. Global scaling and localization
2. Blockchain integration options
3. Advanced ecosystem features

This roadmap prioritizes rapid MVP delivery while maintaining clear upgrade paths to more sophisticated features. Each version builds incrementally on the previous foundation, allowing for user feedback and iterative improvement.

## Technical Stack Recommendations

### Backend
- **Language**: TypeScript/Node.js
- **Database**: PostgreSQL with audit triggers
- **API**: Express.js with OpenAPI documentation
- **Authentication**: JWT with email verification
- **Email**: SendGrid or similar service

### Frontend
- **Framework**: React with TypeScript
- **State Management**: Redux Toolkit or Zustand
- **UI Library**: Material-UI or Tailwind CSS
- **Charts**: Chart.js or D3.js for visualizations

### Infrastructure
- **Hosting**: AWS/GCP/Azure
- **Database**: Managed PostgreSQL
- **File Storage**: S3-compatible storage
- **CI/CD**: GitHub Actions
- **Monitoring**: Basic logging and metrics

## Data Models (Initial)

### Users
```typescript
interface User {
  id: string;
  email: string;
  name: string;
  createdAt: Date;
  invitedBy?: string;
  profileData: UserProfile;
  roles: {
    isContributor: boolean; // Has earned stakes in projects
    isProjectCreator: boolean; // Has created/owns projects
    isRelayHost: boolean; // Can distribute stakes to sub-contributors
  };
  preferences: {
    defaultDashboardView: 'contributions' | 'projects' | 'both';
    notificationSettings: NotificationPreferences;
  };
}
```

### Projects
```typescript
interface Project {
  id: string;
  name: string;
  description: string;
  creatorId: string;
  stakePool: number; // finite pool size
  availableStakes: number; // remaining stakes
  createdAt: Date;
  status: 'active' | 'completed' | 'paused';
  
  // Compensation Configuration
  compensationRules: {
    availableConversions: CompensationType[];
    defaultConversion: CompensationType;
    automaticConversion: boolean;
    investorProtection: boolean; // Prevents investor funds going to historical work
    conversionThresholds: {
      revenueThreshold: number; // Min revenue before cash payouts
      investmentThreshold: number; // Min investment before equity conversion
      tokenThreshold: number; // Min project value before token distribution
    };
  };
  
  // Project Terms & Transparency  
  executionTerms: {
    highGradeCompletionCriteria: string;
    expectedTimeline: number; // months
    successMetrics: string[];
    riskFactors: string[];
    communicationFrequency: string;
    governanceModel: 'creator-controlled' | 'democratic' | 'delegated';
  };
  
  // Current Financial State
  compensation: {
    totalValue: number; // Current project value in base currency
    historicalDebt: number; // Total owed to past contributors
    paidOut: number; // Amount already distributed
    lastValuation: Date;
  };
  
  // Terms Evolution
  termsHistory: ProjectTermsChange[];
  
  // MCP Legal Integration
  legalCompliance: {
    jurisdictionsInvolved: string[]; // ["US", "EU", "CA", etc.]
    complianceStatus: 'compliant' | 'warning' | 'non-compliant' | 'unknown';
    lastLegalReview: Date;
    mcpRecommendations: MCPLegalRecommendation[];
    regulatoryFlags: {
      securitiesLaw: boolean;
      employmentLaw: boolean;
      taxImplications: boolean;
      dataPrivacy: boolean;
      crossBorder: boolean;
    };
    auditReadiness: {
      documentationComplete: boolean;
      complianceScore: number; // 0-100
      missingDocuments: string[];
      recommendedActions: string[];
    };
  };
}

interface CompensationType {
  type: 'revenue-cash' | 'investment-equity' | 'token-allocation' | 'profit-share' | 'hybrid';
  enabled: boolean;
  conversionRate?: number; // stakes to value conversion
  minimumThreshold?: number;
  automaticTrigger?: boolean;
  investorFriendly: boolean; // True if doesn't use investor capital
}

interface ProjectTermsChange {
  id: string;
  changeDate: Date;
  changedBy: string;
  changeType: 'compensation' | 'execution' | 'governance' | 'timeline';
  oldValue: any;
  newValue: any;
  reason: string;
  contributorApprovalRequired: boolean;
  approvalStatus: 'pending' | 'approved' | 'rejected';
}
```

### Milestones
```typescript
interface Milestone {
  id: string;
  projectId: string;
  name: string;
  description: string;
  assignedTo: string[];
  stakeValue: number;
  maxStakeValue?: number; // For relay assignments (over-allocation)
  status: 'pending' | 'in-progress' | 'completed';
  dueDate?: Date;
  isRelayMilestone: boolean; // Indicates if this enables sub-invitations
}
```

### Stakes
```typescript
interface StakeAllocation {
  id: string;
  userId: string;
  projectId: string;
  milestoneId: string;
  stakeAmount: number;
  remainingStakes?: number; // For relay hosts to track distributable stakes
  unitType: string;
  allocatedAt: Date;
  contributionType: string;
  parentAllocationId?: string; // Links to parent relay allocation
  relayLevel: number; // 0 = root, 1 = first relay, 2 = second relay, etc.
}
```

### Relay Permissions
```typescript
interface RelayPermission {
  id: string;
  userId: string; // The relay host
  projectId: string;
  parentUserId?: string; // The user who granted relay permission
  maxStakesToDistribute: number;
  usedStakes: number;
  createdAt: Date;
  status: 'active' | 'exhausted' | 'revoked';
}
```

### Compensation Tracking
```typescript
interface CompensationPayment {
  id: string;
  projectId: string;
  userId: string;
  stakeAmount: number; // Stakes being compensated
  paymentAmount: number; // Actual payment value
  paymentType: 'cash' | 'equity' | 'tokens' | 'other';
  paymentDate: Date;
  exchangeRate: number; // Stakes to payment conversion rate
  status: 'pending' | 'completed' | 'failed';
  transactionDetails?: {
    method: string;
    reference: string;
    fees?: number;
  };
}

interface HistoricalDebt {
  projectId: string;
  totalStakesOwed: number;
  totalValueOwed: number;
  contributorDebts: {
    userId: string;
    stakesOwed: number;
    valueOwed: number;
    contributionPeriod: {
      start: Date;
      end: Date;
    };
  }[];
  lastCalculated: Date;
}
```

### MCP Legal Integration
```typescript
interface MCPLegalRecommendation {
  id: string;
  severity: 'critical' | 'warning' | 'suggestion';
  category: 'securities' | 'employment' | 'tax' | 'corporate' | 'privacy' | 'contract';
  jurisdiction: string;
  title: string;
  description: string;
  recommendation: string;
  implementationSteps: string[];
  estimatedCost?: string;
  timeline?: string;
  legalReferences: string[];
  mcpConfidence: number; // 0-100
  lastUpdated: Date;
  status: 'pending' | 'acknowledged' | 'implemented' | 'dismissed';
}

interface LegalFootprint {
  userId: string;
  primaryJurisdiction: string;
  additionalJurisdictions: string[];
  entityType?: 'individual' | 'corporation' | 'llc' | 'partnership' | 'trust' | 'other';
  taxResidency: string[];
  regulatoryClassifications: {
    accreditedInvestor?: boolean;
    qualifiedInvestor?: boolean;
    professionalInvestor?: boolean;
    jurisdiction: string;
  }[];
  complianceProfile: {
    securitiesRegulations: string[];
    employmentLaws: string[];
    taxObligations: string[];
    dataPrivacyRequirements: string[];
  };
  lastUpdated: Date;
}

interface ComplianceAudit {
  projectId: string;
  auditDate: Date;
  auditType: 'self-assessment' | 'third-party' | 'regulatory';
  scope: string[];
  findings: {
    compliant: ComplianceItem[];
    warnings: ComplianceItem[];
    violations: ComplianceItem[];
  };
  recommendations: MCPLegalRecommendation[];
  remediation: {
    requiredActions: string[];
    optionalImprovements: string[];
    deadline?: Date;
  };
  mcpAnalysis: {
    overallRisk: 'low' | 'medium' | 'high' | 'critical';
    keyJurisdictions: string[];
    primaryConcerns: string[];
    recommendedStructure?: string;
  };
}

interface ComplianceItem {
  regulation: string;
  jurisdiction: string;
  requirement: string;
  currentStatus: string;
  evidence?: string[];
  notes?: string;
}

interface MCPLegalQuery {
  queryId: string;
  projectId: string;
  queryType: 'structure-analysis' | 'compliance-check' | 'risk-assessment' | 'audit-prep';
  context: {
    participants: LegalFootprint[];
    projectStructure: any; // Relevant project data
    specificQuestion?: string;
  };
  mcpResponse: {
    analysis: string;
    recommendations: MCPLegalRecommendation[];
    riskScore: number;
    confidence: number;
    sources: string[];
    lastUpdated: Date;
  };
}
```

### Contributor Agreement & Terms Visibility
```typescript
interface ContributorInvitation {
  id: string;
  projectId: string;
  inviterId: string;
  inviteeEmail: string;
  milestoneIds: string[];
  
  // Full Transparency Package
  termsPackage: {
    projectExecutionTerms: Project['executionTerms'];
    compensationRules: Project['compensationRules'];
    stakeAllocation: {
      proposedStakes: number;
      percentageOfProject: number;
      currentProjectValue: number;
      potentialConversions: CompensationScenario[];
    };
    riskDisclosures: string[];
    exitClauses: string[];
  };
  
  // Acceptance Tracking
  inviteeResponse: {
    status: 'pending' | 'accepted' | 'rejected' | 'counter-proposed';
    respondedAt?: Date;
    acceptedTermsVersion: string;
    counterProposal?: {
      requestedChanges: string[];
      reason: string;
    };
    explicitAgreements: {
      compensationRules: boolean;
      executionTerms: boolean;
      riskFactors: boolean;
      governanceModel: boolean;
    };
  };
}

interface CompensationScenario {
  scenario: string; // "Project reaches $100K revenue", "Series A investment", etc.
  stakeConversion: {
    type: CompensationType['type'];
    estimatedValue: number;
    conversionMechanism: string;
    timeline: string;
  };
}

interface ProjectManagementDashboard {
  projectId: string;
  stakeholderSummary: {
    totalContributors: number;
    activeContributors: number;
    pendingInvitations: number;
    relayHosts: number;
  };
  
  stakeDistribution: {
    totalAllocated: number;
    totalRemaining: number;
    distributionByType: {
      directContribution: number;
      relayDistribution: number;
      reservedForFuture: number;
    };
  };
  
  executionHealth: {
    milestonesCompleted: number;
    milestonesTotal: number;
    onTrackForCriteria: boolean;
    riskFactorsRealized: string[];
    lastUpdate: Date;
  };
}
```

## Security Considerations

1. **Data Integrity**: Audit logs for all stake allocations
2. **Access Control**: Role-based permissions
3. **Email Security**: Verified invitations only
4. **Financial Data**: Encrypted sensitive information
5. **Backup Strategy**: Regular database backups
6. **Compliance**: GDPR considerations for user data

## Success Metrics

1. **User Adoption**: Registration and invitation rates
2. **Project Activity**: Number of active projects and milestones
3. **Stake Distribution**: Fair and transparent allocation patterns
4. **User Satisfaction**: Feedback on system usability
5. **Technical Performance**: System reliability and speed

## Future Considerations

1. **Legal Integration**: Connection to cap table management
2. **Token Economics**: Conversion to tradable tokens
3. **Cross-Platform**: Mobile applications
4. **API Ecosystem**: Third-party integrations
5. **Governance**: Community-driven feature development

This specification prioritizes simplicity and rapid implementation while maintaining the flexibility to evolve into a more sophisticated system as needs grow and resources become available.