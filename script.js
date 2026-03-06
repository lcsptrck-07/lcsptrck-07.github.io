// STARS — fewer on mobile
    const starChars = ['✦','✧','·','⊹','∗'];
    const sc = document.getElementById('stars-container');
    const isMobile = window.matchMedia('(hover: none) and (pointer: coarse)').matches;
    const starCount = isMobile ? 10 : 26;
    for (let i = 0; i < starCount; i++) {
      const s = document.createElement('div');
      s.className = 'star';
      s.textContent = starChars[Math.floor(Math.random() * starChars.length)];
      s.style.left  = Math.random() * 100 + 'vw';
      s.style.top   = Math.random() * 320 + 'vh';
      const dur = isMobile ? (5 + Math.random() * 5) : (1.5 + Math.random() * 3);
      s.style.setProperty('--d', dur.toFixed(1) + 's');
      s.style.setProperty('--delay', -(Math.random() * dur).toFixed(1) + 's');
      s.style.fontSize = (isMobile ? 5 : (9 + Math.random() * 9)).toFixed(0) + 'px';
      sc.appendChild(s);
    }

    // PROJECT DATA
    const IMG_COVER     = 'assets/cover.png';
    const IMG_PROCESS   = 'assets/process.png';
    const IMG_DASHBOARD = 'assets/dashboard.png';
    const IMG_ORDER     = 'assets/order.png';
    const IMG_IDIOMAS   = 'assets/idiomas.png';
    const IMG_GUIA1     = 'https://static.wixstatic.com/media/57e34c_b958f97e4a8d44269c7fe7911700f9c4~mv2.png';
    const IMG_GUIA2     = 'https://static.wixstatic.com/media/57e34c_9353e23f08324333a2d86eca15702050~mv2.png';

    const data = {
      en: [
        {
          title: 'Virtual Assistant — Insurance', brand: 'GFT Technologies',
          meta: 'GFT Technologies | Sep 2024 – present', tag: 'Conversational Design · Content Design',
          sections: [
            { type:'text', label:'About', content:'Development of logical flows and content for a BLIP-powered chatbot for a virtual assistant in the Insurance sector. Strategic work on payment, billing and relationship flows, coordinating the Content Design team.' },
            { type:'steps', label:'Process', steps:[
              { num:'01', label:'Discovery', desc:'Conversations with real users and data analysis to map pain points in service flows and identify communication gaps.' },
              { num:'02', label:'Content definition', desc:'Creation of conversational wireframes and mapping of all dialogue routes, including error paths and fallback flows.' },
              { num:'03', label:'Writing & review', desc:'Interface and chatbot copy written with a focus on clarity, human tone and consistency with the writing guide.' },
              { num:'04', label:'Testing & iteration', desc:'Flow validation with real tests on the BLIP platform, adjustments based on completion metrics and squad feedback.' },
            ]},
            { type:'divider' },
            { type:'tags', content:['UX Writer','Chatbot','Chatbot Development','Content Design'] }
          ]
        },
        {
          title: 'Joice — Virtual Assistant', brand: 'Oi Telecomunicações',
          meta: 'Oi · Outsourced | Dec 2022 – Sep 2024', tag: 'Conversational Design · UX Writing',
          sections: [
            { type:'text', label:'About', content:"Development of flows and content for Joice, Oi Telecom's virtual assistant powered by Watson AI. Available on WhatsApp, social media, chat and mobile apps, focused on the Oi Fibra product." },
            { type:'steps', label:'Process', steps:[
              { num:'01', label:'Mapping', desc:'Gathering the main customer contact reasons and analysing conversation logs to identify friction points.' },
              { num:'02', label:'Conversational architecture', desc:'Design of logical flows with dialogue wireframes, definition of intents, entities and human escalation routes.' },
              { num:'03', label:'Content & tagging', desc:"Writing Joice's responses and tagging events in the Watson platform for curation and continuous improvement." },
              { num:'04', label:'Automated testing', desc:'Development of individual and automated tests with the engineering team to ensure accuracy in production.' },
            ]},
            { type:'divider' },
            { type:'tags', content:['Content Designer','Chatbot','UX Writing'] }
          ]
        },
        {
          title: 'Content Guide', brand: 'Nuvemshop',
          meta: 'Design Service | Content OPS | Content Design', tag: 'Nuvemshop | Jun 2021 – Oct 2022',
          mediaType:'image', mediaUrl: IMG_COVER,
          sections: [
            { type:'text', label:'Problem', content:"The Content Design team needed to iterate on an existing, outdated content guide built by product designers. As the product and processes evolved, the guide needed a full update." },
            { type:'list', label:'The guide needed to:', items:[
              'Maintain product consistency across app and desktop;',
              'Update decisions made by the Content Design team during projects;',
              'Serve as the main reference for stakeholders: designers, support, marketing and development;',
              'Reflect the recently updated brand tone and voice;',
              'Address accessibility guidelines adjusted to the Nuvemshop writing routine;',
              'Align default content for Design System components.',
            ]},
            { type:'text', label:'Context', content:"Nuvemshop works directly with small and large entrepreneurs who navigate the platform daily to manage their stores. The guide was built with these people in mind. A content guide is also a way to scale the product — maintaining consistency, building user recognition and adding brand credibility." },
            { type:'steps', label:'Process', steps:[
              { num:'01', label:'Existing guide analysis', desc:'I reviewed the entire first version end to end. With the team, we mapped what to keep, what no longer made sense and what to add — creating a structure based on user research, team workflows and day-to-day content decisions.' },
              { num:'02', label:'Structuring the guide', desc:'We discussed use cases, terminology, grammar rules and content patterns for each product area. We created macro themes with related sub-topics. Example: under "Content System" we included error messages, CTAs, confirmation messages and other Nimbus Design System components.' },
              { num:'03', label:'Tone & voice', desc:'The brand already had a tone and voice for acquisition. For the product, the goal was to guide users clearly. We mapped synonyms and related words following UX Writing best practices, content heuristics and the everyday language used with users.' },
              { num:'04', label:'Delivery', desc:'After the first version, we moved it to a tool with better navigation. We presented it to all Nuvemshop | Tiendanube designers and attached a feedback doc — aiming for a collaborative and ongoing build.' },
              { num:'05', label:'Educating stakeholders', desc:'The guide is just the beginning. As content designers, we must be the living guide — educating everyone around us. This guide also showed the impact of content on the product and its importance for the user experience.' },
            ]},
            { type:'image', url:IMG_GUIA1, alt:'Content guide structure' },
            { type:'image', url:IMG_GUIA2, alt:'Tone & voice workshop' },
            { type:'divider' },
            { type:'role', label:'My role', items:[
              'Analyse, gather data and structure guide topics',
              'Write definitions, collect examples and gather feedback',
              'Iterate based on feedback and technical feasibility',
              'Document important feedback for the backlog',
            ]},
            { type:'tags', content:['UX Writing','User Experience (UX)','Content Design'] }
          ]
        },
        {
          title: 'New Admin Migration', brand: 'Nuvemshop',
          meta: 'Nuvemshop | Jun 2021 – Oct 2022', tag: 'Content Designer',
          mediaType:'image', mediaUrl: IMG_COVER,
          sections: [
            { type:'text', label:'Goal', content:"Nuvemshop started migrating product domains and pages to a new admin panel to provide the best experience for merchants regardless of how they managed their store — and to close the gap between mobile apps and the web admin." },
            { type:'list', label:'Questions that guided the process:', items:[
              'What is the main goal of the pages we will migrate?',
              'Which existing features are available on mobile and desktop?',
              'Which components need to be migrated?',
              'Would the UX be the same across mobile and desktop?',
              '#MobileFirst — Can we reduce content without losing clarity?',
              'Can we improve microcopy to be clearer, more concise and consistent?',
            ]},
            { type:'text', label:null, content:'We prioritised a consistent experience across app and web, considering users with poor connection, limited attention and older devices.' },
            { type:'steps', label:'Process', steps:[
              { num:'01', label:'Discovery', desc:'Team catchups to understand the problem, business priorities and OKRs. A product walkthrough documenting all flows to find improvement opportunities.' },
              { num:'02', label:'Redesign & iteration', desc:'Redesign with targeted research, internal feedback and iterations. Lean UX: fast discovery, prototyping, internal validation and, when needed, quick user interviews.' },
              { num:'03', label:'Documentation', desc:'Content documentation and repository. Review and Sign-Off before handoff to the development team.' },
              { num:'04', label:'Handoff & Rollout', desc:'Alignment of edge cases and technical feasibility with the Tech team. End-to-end content review, implementation and follow-up based on user feedback.' },
            ]},
            { type:'text', label:null, content:'We decided to migrate 10 years of product in 6 months — requiring the most agile process possible. More than migrating old screens, we iterated key touchpoints to deliver a better experience.' },
            { type:'image', url:IMG_PROCESS, alt:'Migration UX process' },
            { type:'divider' },
            { type:'role', label:'My role', items:[
              'Build consistent and scalable content',
              'Localise and document content',
              'Translate from Spanish to Portuguese',
              'Support the development team',
              'Review content before going to production',
            ]},
            { type:'text', label:'Before & after — selected screens', content:'Dashboard/Onboarding, Product Order and Languages & Currencies.' },
            { type:'image', url:IMG_DASHBOARD, alt:'Dashboard/Onboarding — before & after' },
            { type:'image', url:IMG_ORDER, alt:'Product order — before & after' },
            { type:'image', url:IMG_IDIOMAS, alt:'Languages & currencies — before & after' },
            { type:'tags', content:['Content Design','UX Writing','Localisation','MobileFirst','Lean UX'] }
          ]
        },
        {
          title: 'Payment & Billing Flows', brand: 'GFT Technologies',
          meta: 'GFT Technologies | Sep 2024 – present', tag: 'Content Design · UX Writing',
          sections: [
            { type:'text', label:'About', content:"Strategic work on payment, billing and relationship design fronts, reducing friction in the product's critical flows." },
            { type:'steps', label:'Process', steps:[
              { num:'01', label:'Problem identification', desc:'Data analysis and user conversations to anticipate and prioritise communication issues in payment flows.' },
              { num:'02', label:'Content proposals', desc:'Creation of microcopy alternatives for errors, confirmations, billing and communication sequences via email and SMS.' },
              { num:'03', label:'Data validation', desc:'Monitoring of flow completion metrics and ticket volume to measure the impact of content changes.' },
            ]},
            { type:'divider' },
            { type:'tags', content:['UX Writer','Content Design','Agile Methodology'] }
          ]
        }
      ],
      pt: [
        {
          title: 'Assistente Virtual — Seguros', brand: 'GFT Technologies',
          meta: 'GFT Technologies | set 2024 – presente', tag: 'Design Conversacional · Content Design',
          sections: [
            { type:'text', label:'Sobre o projeto', content:'Desenvolvimento de fluxos lógicos e conteúdo para chatbot com tecnologia BLIP para assistente virtual no ramo de Seguros. Atuação estratégica em pagamento, cobrança e relacionamento, coordenando o time de Content Design.' },
            { type:'steps', label:'Processo', steps:[
              { num:'01', label:'Descoberta', desc:'Conversas com usuários reais e análise de dados para mapear dores nos fluxos de atendimento e identificar gaps de comunicação.' },
              { num:'02', label:'Definição de conteúdo', desc:'Criação de wireframes conversacionais e mapeamento de todas as rotas de diálogo, incluindo caminhos de erro e fallback.' },
              { num:'03', label:'Escrita & revisão', desc:'Redação dos textos da interface e dos fluxos do chatbot com foco em clareza, tom humano e consistência com o guia de redação.' },
              { num:'04', label:'Teste & iteração', desc:'Validação dos fluxos com testes reais na plataforma BLIP, ajustes com base em métricas de conclusão e feedback dos squads.' },
            ]},
            { type:'divider' },
            { type:'tags', content:['UX Writer','Chatbot','Desenvolvimento de chatbots','Content Design'] }
          ]
        },
        {
          title: 'Joice — Assistente Virtual', brand: 'Oi Telecomunicações',
          meta: 'Oi · Terceirizado | dez 2022 – set 2024', tag: 'Design Conversacional · UX Writing',
          sections: [
            { type:'text', label:'Sobre o projeto', content:'Desenvolvimento de fluxos e conteúdo para a Joice, assistente virtual da Oi Telecom via Watson IA. Presente em WhatsApp, redes sociais, chat e apps, com foco no produto Oi Fibra.' },
            { type:'steps', label:'Processo', steps:[
              { num:'01', label:'Mapeamento', desc:'Levantamento dos principais motivos de contato e análise dos logs de conversas para identificar pontos de fricção.' },
              { num:'02', label:'Arquitetura conversacional', desc:'Desenho dos fluxos lógicos com wireframes de diálogo, definição de intents, entities e rotas de escalonamento humano.' },
              { num:'03', label:'Conteúdo & tagueamento', desc:'Redação das respostas da Joice e tagueamento de eventos na plataforma Watson para curadoria e melhoria contínua.' },
              { num:'04', label:'Testes automatizados', desc:'Desenvolvimento de testes individuais e automáticos junto ao time de engenharia para garantir precisão em produção.' },
            ]},
            { type:'divider' },
            { type:'tags', content:['Content Designer','Chatbot','UX Writing'] }
          ]
        },
        {
          title: 'Guia de Conteúdo', brand: 'Nuvemshop',
          meta: 'Design Service | Content OPS | Content Design', tag: 'Nuvemshop | jun 2021 – out 2022',
          mediaType:'image', mediaUrl: IMG_COVER,
          sections: [
            { type:'text', label:'Problema', content:'O time de Content Design precisava iterar um guia de conteúdo já existente e desatualizado, feito pelos próprios designers de produto. Como houve uma mudança e evolução do produto, além do processo de trabalho, veio a necessidade deste guia ser iterado.' },
            { type:'list', label:'Era necessário atualizar o guia para:', items:[
              'Manter consistência do produto tanto no aplicativo quanto no desktop;',
              'Atualizar com as definições tomadas pelo time de Content Design durante projetos;',
              'Servir de fonte principal para stakeholders: designers, suporte, marketing e desenvolvimento;',
              'Iterar baseado no novo Tom e Voz da marca;',
              'Iterar questões de acessibilidade ajustadas à rotina de escrita na Nuvemshop;',
              'Alinhar conteúdos padrões dos componentes do Design System.',
            ]},
            { type:'text', label:'Contexto', content:'A Nuvemshop lida diretamente com pequenos e grandes empreendedores que navegam diariamente na plataforma para gerenciar suas vendas. Por isso, este guia foi construído baseado nestas pessoas. Ter um guia de conteúdo é uma forma de escalar o produto — mantém consistência, traz identificação dos usuários e credibilidade para a marca.' },
            { type:'steps', label:'Processo', steps:[
              { num:'01', label:'Análise do guia existente', desc:'Analisei o conteúdo da primeira versão de ponta a ponta. Junto ao time, escalei o que manter, o que não fazia mais sentido e o que precisava ser incluído — criando uma estrutura baseada em pesquisas com clientes, rotina de trabalho e definições de conteúdo do dia a dia.' },
              { num:'02', label:'Estruturando o guia', desc:'Reunimos para entender casuísticas, palavras, regras ortográficas e formas de criar conteúdo. Criamos temas macros e subtemas relacionados. Exemplo: dentro de "Content System" consideramos mensagem de erro, CTAs, mensagens de confirmação e outros componentes do Design System Nimbus.' },
              { num:'03', label:'Tom e voz', desc:'A marca já contava com tom e voz para captação. Para o produto, o objetivo era guiar a pessoa usuária de forma clara pela plataforma. Mapeamos sinônimos e palavras correlacionadas seguindo boas práticas de UX Writing, heurísticas de conteúdo e a essência de como falávamos com os usuários no dia a dia.' },
              { num:'04', label:'Entrega', desc:'Após finalizar a primeira versão, colocamos o guia numa ferramenta com melhor navegabilidade. Apresentamos para todos os designers da Nuvemshop | Tiendanube e anexamos um doc para coletar feedbacks — com intuito de uma construção colaborativa e constante.' },
              { num:'05', label:'Educando os stakeholders', desc:'O guia é só o começo. Como content designers, devemos ser o guia vivo — educando todos ao nosso redor sobre boas práticas de conteúdo. Este guia serviu para mostrar o impacto do conteúdo no produto e sua importância para criar uma boa experiência aos clientes.' },
            ]},
            { type:'image', url:IMG_GUIA1, alt:'Estrutura do guia de conteúdo' },
            { type:'image', url:IMG_GUIA2, alt:'Tom e voz — workshop' },
            { type:'divider' },
            { type:'role', label:'Meu papel', items:[
              'Analisar, captar dados e estruturar tópicos do guia',
              'Escrever definições, coletar exemplos e colher feedbacks',
              'Iterar de acordo com os feedbacks e viabilidade técnica',
              'Documentar feedbacks importantes para um backlog',
            ]},
            { type:'tags', content:['Redação UX','Experiência do usuário (UX)','Content Design'] }
          ]
        },
        {
          title: 'Migração ao novo administrador', brand: 'Nuvemshop',
          meta: 'Nuvemshop | jun 2021 – out 2022', tag: 'Content Designer',
          mediaType:'image', mediaUrl: IMG_COVER,
          sections: [
            { type:'text', label:'Objetivo', content:'A Nuvemshop começou seu projeto de migrar domínios e páginas do produto para um novo administrador com o objetivo de proporcionar a melhor experiência aos merchants ao usarem todos os produtos, sem importar de onde ou como gerenciassem sua loja. Além de solucionar o gap entre aplicações móveis e o administrador web.' },
            { type:'list', label:'Como atuamos? Perguntas que guiaram o processo:', items:[
              'Qual o objetivo principal das páginas que iremos migrar?',
              'Quais funcionalidades existentes estão disponíveis para mobile e para desktop?',
              'Quais componentes precisaríamos migrar?',
              'A UX seria a mesma para mobile e desktop? Quais casuísticas teríamos entre dispositivos?',
              '#MobileFirst — Podemos reduzir o conteúdo sem perder clareza do problema que queremos resolver?',
              'Podemos melhorar o microcopy para que seja mais claro, conciso e consistente?',
            ]},
            { type:'text', label:null, content:'Prezamos que a experiência fosse a mesma tanto no aplicativo quanto no administrador web, considerando usuários com má conexão, pouco tempo de atenção e dispositivos antigos.' },
            { type:'steps', label:'Processo', steps:[
              { num:'01', label:'Discovery', desc:'Catchups entre os times para entender o problema, prioridades de negócio e OKRs. Road pelo produto documentando todos os fluxos para encontrar oportunidades de melhoria.' },
              { num:'02', label:'Redesenho & iteração', desc:'Início do redesenho com pesquisas pontuais, pedidos de feedback internos e iterações com base nas respostas. Lean UX: discovery rápido, prototipação, validação interna e, quando necessário, quick interviews com usuários.' },
              { num:'03', label:'Documentação', desc:'Documentação e repositório de conteúdo. Revisão e Sign-Off antes do hands-off com o time de desenvolvimento.' },
              { num:'04', label:'Hands-off & Rollout', desc:'Alinhamento de casuísticas e viabilidades técnicas com o time de Tech. Rollout com revisão prévia de ponta a ponta, implementação e seguimento com iterações baseadas em feedback dos usuários.' },
            ]},
            { type:'text', label:null, content:'Decidimos migrar 10 anos de produto em 6 meses — o que exigiu um processo o mais ágil possível. Mais que migrar telas velhas para novas, iteramos pontos-chave para proporcionar uma experiência melhor.' },
            { type:'image', url:IMG_PROCESS, alt:'Processo UX da migração' },
            { type:'divider' },
            { type:'role', label:'Meu papel', items:[
              'Construir conteúdo consistente e escalável',
              'Localizar e documentar o conteúdo',
              'Traduzir do espanhol para português',
              'Apoiar e dar suporte ao time de desenvolvimento',
              'Revisar antes de ir a produção',
            ]},
            { type:'text', label:'Antes e depois — telas selecionadas', content:'Dashboard/Onboarding, Ordem dos Produtos e Idiomas & Moedas.' },
            { type:'image', url:IMG_DASHBOARD, alt:'Dashboard/Onboarding — antes e depois' },
            { type:'image', url:IMG_ORDER, alt:'Ordem dos produtos — antes e depois' },
            { type:'image', url:IMG_IDIOMAS, alt:'Idiomas e moedas — antes e depois' },
            { type:'tags', content:['Content Design','UX Writing','Localização','MobileFirst','Lean UX'] }
          ]
        },
        {
          title: 'Fluxos de Pagamento & Cobrança', brand: 'GFT Technologies',
          meta: 'GFT Technologies | set 2024 – presente', tag: 'Content Design · UX Writing',
          sections: [
            { type:'text', label:'Sobre o projeto', content:'Atuação estratégica em frentes de design para soluções de pagamento, cobrança e relacionamento, reduzindo fricção nos fluxos críticos do produto.' },
            { type:'steps', label:'Processo', steps:[
              { num:'01', label:'Identificação de problemas', desc:'Análise de dados e conversas com usuários para antecipar e priorizar problemas de comunicação nos fluxos de pagamento.' },
              { num:'02', label:'Proposta de conteúdo', desc:'Criação de alternativas de microcopy para erros, confirmações, cobrança e réguas de comunicação por e-mail e SMS.' },
              { num:'03', label:'Validação com dados', desc:'Monitoramento das métricas de conclusão de fluxo e abertura de chamados para medir o impacto das mudanças.' },
            ]},
            { type:'divider' },
            { type:'tags', content:['UX Writer','Content Design','Metodologia Ágil'] }
          ]
        }
      ]
    };

    const strings = {
      en: {
        'nav.work':'work', 'nav.about':'about', 'nav.contact':'contact',
        'hero.h1': "hi, i'm lucas patrick, sometimes a <em>content designer</em>, sometimes a strategist,<br>BUT <em>always</em> a writer. built in words… and this is what's in my bag",
        'work.label':'selected work',
        'proj.0.title':'Virtual Assistant','proj.1.title':'Joice — Chatbot',
        'proj.2.title':'Content Guide','proj.3.title':'New Admin Migration','proj.4.title':'Payment Flows',
        'about.title':'content designer, ux writer & conversational designer',
        'skill.conv':'conversational designer',
        'about.p1':"I'm Lucas Patrick, a Content Designer and UX Writer with over 7 years of experience in digital interfaces. I craft copy for #mobilefirst products, conversational flows, chatbots and writing guides — always focused on clarity, scalability and real user impact.",
        'about.p2':"I've worked with companies like GFT Technologies, Oi Telecom, Nuvemshop and Caixa Seguradora, collaborating closely with designers, PMs, developers and data scientists in agile environments.",
        'about.p3':'Degree in Advertising from Estácio, Pre-MBA in Artificial Intelligence from Saint Paul, and intensive UX Writing certification from Awari. Based in Brasília, working remotely.',
        'contact.cta':"let's work together",
        'footer.thanks':'thank you',
      },
      pt: {
        'nav.work':'trabalhos', 'nav.about':'sobre', 'nav.contact':'contato',
        'hero.h1': 'oi, sou lucas patrick, às vezes <em>content designer</em>, às vezes estrategista,<br>mas <em>sempre</em> um escritor. feito de palavras… e é isso que tem na minha jornada',
        'work.label':'trabalhos selecionados',
        'proj.0.title':'Assistente Virtual','proj.1.title':'Joice — Chatbot',
        'proj.2.title':'Guia de Conteúdo','proj.3.title':'Migração ao novo admin','proj.4.title':'Fluxos de Pagamento',
        'about.title':'content designer, ux writer & designer conversacional',
        'skill.conv':'designer conversacional',
        'about.p1':'Sou Lucas Patrick, Content Designer e UX Writer com mais de 7 anos de experiência em interfaces digitais. Atuo na criação de textos para produtos #mobilefirst, fluxos conversacionais, chatbots e guias de redação — sempre com foco em clareza, escalabilidade e impacto real para o usuário.',
        'about.p2':'Já passei por empresas como GFT Technologies, Oi Telecom, Nuvemshop e Caixa Seguradora, trabalhando de perto com designers, PMs, desenvolvedores e cientistas de dados em metodologia ágil.',
        'about.p3':'Formado em Publicidade pela Estácio, com Pré-MBA em Inteligência Artificial pela Saint Paul e certificação intensiva de UX Writer pela Awari. Baseado em Brasília, atuando remotamente.',
        'contact.cta':'vamos trabalhar juntos',
        'footer.thanks':'obrigado',
      }
    };

    let lang = 'pt';
    let cur  = 0;

    // MODAL ELEMENTS
    const overlay = document.getElementById('modal-overlay');
    const mTag    = document.getElementById('modal-tag');
    const mTitle  = document.getElementById('modal-title');
    const mBrand  = document.getElementById('modal-brand');
    const mMeta   = document.getElementById('modal-meta');
    const mMedia  = document.getElementById('modal-media-content');
    const mBody   = document.getElementById('modal-body');

    function renderSection(s) {
      if (s.type === 'text') return (s.label ? `<p class="modal-section-title">${s.label}</p>` : '') + `<p class="modal-body-text">${s.content}</p>`;
      if (s.type === 'list') return `<p class="modal-section-title">${s.label}</p><ul class="modal-body-list">${s.items.map(i=>`<li>${i}</li>`).join('')}</ul>`;
      if (s.type === 'steps') return `<p class="modal-section-title">${s.label}</p><div>${s.steps.map(st=>`<div class="process-step"><div class="step-num">${st.num}</div><div><div class="step-label">${st.label}</div><div class="step-desc">${st.desc}</div></div></div>`).join('')}</div>`;
      if (s.type === 'image') return `<div class="modal-img-wrap" onclick="openLightbox('${s.url}')"><img src="${s.url}" alt="${s.alt||''}" referrerpolicy="no-referrer"></div>`;
      if (s.type === 'divider') return `<div class="modal-divider">· · ·</div>`;
      if (s.type === 'role') return `<p class="modal-section-title">${s.label}</p><ul class="modal-body-list">${s.items.map(i=>`<li>${i}</li>`).join('')}</ul>`;
      if (s.type === 'tags') return `<div style="display:flex;flex-wrap:wrap;gap:8px;margin-top:16px;">${s.content.map(t=>`<span class="skill-tag">${t}</span>`).join('')}</div>`;
      return '';
    }

    function openModal(i) {
      cur = i;
      const p = data[lang][i];
      if (!p) return;
      mTag.textContent   = p.tag || '';
      mTitle.textContent = p.title;
      mBrand.textContent = p.brand;
      mMeta.textContent  = p.meta;
      mMedia.innerHTML   = (p.mediaType === 'image' && p.mediaUrl)
        ? `<img src="${p.mediaUrl}" alt="${p.title}" style="width:100%;border-radius:2px;border:1px solid var(--light);display:block;">`
        : `<div class="modal-video"><div class="play-btn"></div></div>`;
      mBody.innerHTML = (p.sections||[]).map(renderSection).join('');
      overlay.classList.add('open');
      overlay.scrollTop = 0;
      document.body.style.overflow = 'hidden';
    }

    function closeModal() {
      overlay.classList.remove('open');
      document.body.style.overflow = '';
    }

    document.querySelectorAll('.grid-item').forEach(el =>
      el.addEventListener('click', () => openModal(+el.dataset.index))
    );
    document.getElementById('modal-close-btn').addEventListener('click', closeModal);
    document.getElementById('prev-btn').addEventListener('click', () => openModal((cur-1+5)%5));
    document.getElementById('next-btn').addEventListener('click', () => openModal((cur+1)%5));
    document.addEventListener('keydown', e => {
      if (!overlay.classList.contains('open')) return;
      if (e.key==='Escape') closeModal();
      if (e.key==='ArrowRight') openModal((cur+1)%5);
      if (e.key==='ArrowLeft')  openModal((cur-1+5)%5);
    });

    // I18N
    function applyLang(l) {
      lang = l;
      const t = strings[l];
      document.querySelectorAll('[data-i18n]').forEach(el => {
        const k = el.getAttribute('data-i18n');
        if (t[k] !== undefined) el.innerHTML = t[k];
      });
      document.querySelectorAll('.lang-btn').forEach(btn =>
        btn.classList.toggle('active', btn.dataset.lang === l)
      );
      document.documentElement.lang = l === 'pt' ? 'pt-BR' : 'en';
    }
    document.querySelectorAll('.lang-btn').forEach(btn =>
      btn.addEventListener('click', () => applyLang(btn.dataset.lang))
    );
    applyLang('pt');

    // LIGHTBOX
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    function openLightbox(src) { lightboxImg.src = src; lightbox.classList.add('open'); }
    function closeLightbox() { lightbox.classList.remove('open'); lightboxImg.src = ''; }
    document.getElementById('lightbox-close').addEventListener('click', closeLightbox);
    lightbox.addEventListener('click', e => { if (e.target === lightbox) closeLightbox(); });
    document.addEventListener('keydown', e => {
      if (e.key === 'Escape' && lightbox.classList.contains('open')) closeLightbox();
    });