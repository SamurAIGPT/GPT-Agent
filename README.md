# Camel-AutoGPT

[![GitHub stars](https://img.shields.io/github/stars/SamurAIGPT/GPT-Agent?style=social)](https://github.com/SamurAIGPT/GPT-Agent/stargazers)
[![License](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)
[![Demo](https://img.shields.io/badge/demo-live-green.svg)](https://camelagi.thesamur.ai/)

**Dual AI Agents Working Together** - Configure and deploy two autonomous AI agents that collaborate to achieve any goal. Watch as they communicate, delegate tasks, and solve problems together.

> Imagine the power of AutoGPT/BabyAGI... now picture **two** of these agents working as a team.

## Demo

Try it live: [camelagi.thesamur.ai](https://camelagi.thesamur.ai/)

## Features

- **Dual Agent System** - Two AI agents collaborate on tasks
- **Custom Personas** - Name and configure your own AI characters
- **Goal-Oriented** - Set any goal and watch agents work together
- **Real-Time Conversation** - View agent-to-agent communication
- **Web Interface** - Easy-to-use browser-based interface

## How It Works

1. **Configure Agents** - Define two AI personas with names and roles
2. **Set a Goal** - Describe what you want them to accomplish
3. **Watch Collaboration** - Agents discuss, plan, and execute together
4. **Get Results** - Receive the output of their combined efforts

## Roadmap

- [ ] Share agent conversations
- [ ] Save and replay agent runs
- [ ] Pre-configured instructor/assistant examples
- [ ] Web browsing capabilities
- [ ] Document API for writing tasks
- [ ] More coming soon...

## Quick Start

### Prerequisites

- Python 3.8+
- Node.js v18+
- OpenAI API Key

### Installation

```bash
# Clone the repository
git clone https://github.com/SamurAIGPT/GPT-Agent.git
cd GPT-Agent

# Follow setup instructions
cat steps_to_run.md
```

See detailed setup: [steps_to_run.md](https://github.com/SamurAIGPT/GPT-Agent/blob/main/steps_to_run.md)

## Architecture

The system uses the CAMEL (Communicative Agents for Mind Exploration) framework:

```
User Goal
    │
    ▼
┌─────────┐     ┌─────────┐
│ Agent 1 │◄───►│ Agent 2 │
│(Assist) │     │(Instruct)│
└─────────┘     └─────────┘
    │               │
    └───────┬───────┘
            ▼
       Task Output
```

## Example Use Cases

- **Research Tasks** - One agent researches, another synthesizes
- **Code Review** - Developer agent writes, reviewer agent critiques
- **Content Creation** - Writer agent drafts, editor agent refines
- **Problem Solving** - Analyst agent investigates, strategist agent plans

## References

Built on the CAMEL framework: [lightaime/camel](https://github.com/lightaime/camel)

## Support

Join our Discord: [discord.gg/A6EzvsKX4u](https://discord.gg/A6EzvsKX4u)

## Follow for Updates

- [Anil Chandra Naidu Matcha](https://twitter.com/matchaman11)
- [Ankur Singh](https://twitter.com/ankur_maker)

## Related Projects

- [AutoGPT](https://github.com/SamurAIGPT/AutoGPT) - Browser version of AutoGPT
- [EmbedAI](https://github.com/SamurAIGPT/EmbedAI) - Private document QnA

## License

MIT License - see [LICENSE](LICENSE) for details.
