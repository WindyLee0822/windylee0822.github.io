---
permalink: /
title: ""
excerpt: "Wendi Li — PhD student at UW-Madison"
author_profile: false
redirect_from:
  - /about/
  - /about.html
---

<div class="academic-home">
  <section class="academic-intro" id="about">
    <aside class="academic-profile">
      <img src="/images/myavatar.jpg" alt="Portrait of Wendi Li">
      <h1>Wendi Li</h1>
      <p class="academic-role">PhD Student in Computer Sciences</p>
      <p class="academic-affiliation">University of Wisconsin–Madison</p>
      <nav class="profile-links" aria-label="Profile links">
        <a class="profile-email" href="mailto:wli679@wisc.edu"><i class="fas fa-envelope" aria-hidden="true"></i>wli679@wisc.edu</a>
        <a href="https://scholar.google.com/citations?user=hK19TbcAAAAJ&amp;hl=zh-CN"><i class="fas fa-graduation-cap" aria-hidden="true"></i>Google Scholar</a>
        <a href="https://github.com/WindyLee0822"><i class="fab fa-github" aria-hidden="true"></i>GitHub</a>
        <a href="https://www.linkedin.com/in/wendi-li-323997285/"><i class="fab fa-linkedin" aria-hidden="true"></i>LinkedIn</a>
        <a href="/Wendi_Resume.pdf"><i class="fas fa-file-alt" aria-hidden="true"></i>Curriculum Vitae</a>
      </nav>
    </aside>

    <div class="academic-intro__bio">
      <p class="intro-kicker">Hello, I’m Wendi.</p>
      <p>I am currently a first-year PhD student at <a href="https://www.cs.wisc.edu/">University of Wisconsin–Madison</a>, where I am fortunate to be advised by Prof. <a href="https://pages.cs.wisc.edu/~sharonli/">Sharon Li</a>. I received my B.E. and M.E. in Computer Science and Technology from <a href="https://www.usnews.com/education/best-global-universities/huazhong-university-of-science-and-technology-505190">Huazhong University of Science and Technology</a>.</p>
      <p>My current research interests lie in <strong>reinforcement learning algorithms for large-scale models</strong> and their downstream applications, such as <strong>agentic systems</strong>.</p>
      <p class="intro-contact">I am always happy to chat and discuss about potential collaborations or my past research projects. Feel free to contact me via email wli679 AT wisc.edu</p>

      <div class="research-interests" id="research">
        <h2>Research Interests</h2>
        <div class="research-grid">
          <article>
            <span>01</span>
            <h3>Reinforcement Learning</h3>
            <p>Learning reliable policies and reward signals for large-scale foundation models.</p>
          </article>
          <article>
            <span>02</span>
            <h3>Reasoning Models</h3>
            <p>Improving exploration, process supervision, and test-time reasoning behavior.</p>
          </article>
          <article>
            <span>03</span>
            <h3>Agentic Systems</h3>
            <p>Building capable agents that can plan, learn from feedback, and act robustly.</p>
          </article>
        </div>
      </div>
    </div>
  </section>

  <section class="academic-section" id="news">
    <div class="section-heading">
      <div>
        <p class="section-label">Updates</p>
        <h2>News</h2>
      </div>
    </div>
    <ul class="academic-news">
      <li><time datetime="2026-05">Jul 2026</time><span>Progress Advantage won the <a href="https://sites.google.com/view/rlxf-icml2026/accepted-papers"><strong>best paper award</strong> at workshop RLxF@ICML 2026</a></span></li>
      <li><time datetime="2026-05">May 2026</time><span>I started my summer internship as a <strong>Research Intern in Microsoft</strong>, Redmond, WA.</span></li>
      <li><time datetime="2026-04">Apr 2026</time><span>Two papers were accepted at <strong>ACL 2026</strong>.</span></li>
      <li><time datetime="2026-01">Jan 2026</time><span>GEB was accepted by <strong>ICLR 2026</strong>.</span></li>
      <li><time datetime="2025-11">Nov 2025</time><span>GEB was selected for an oral presentation at <strong>ResponsibleFM@NeurIPS 2026</strong>.</span></li>
      <li><time datetime="2025-08">Aug 2025</time><span>I started my PhD journey at <strong>UW–Madison</strong>.</span></li>
      <li><time datetime="2025-05">May 2025</time><span>Free Process Rewards without Process Labels was accepted by <strong>ICML 2025</strong>.</span></li>
      <li><time datetime="2025-01">Jan 2025</time><span>PQM was accepted by <strong>ICLR 2025</strong>.</span></li>
      <li><time datetime="2024-02">Feb 2024</time><span>One paper was accepted by <strong>Findings of NAACL 2024</strong>.</span></li>
      <li><time datetime="2023-10">Oct 2023</time><span>I received the <strong>National Scholarship</strong> (top 3% nationwide).</span></li>
      <li><time datetime="2023-05">May 2023</time><span>One paper was accepted by the <strong>ACL 2023</strong> main conference.</span></li>
    </ul>
  </section>

  <section class="academic-section" id="publications">
    <div class="section-heading">
      <div>
        <p class="section-label">Research output</p>
        <h2>Publications</h2>
      </div>
      <a class="text-link" href="https://scholar.google.com/citations?user=hK19TbcAAAAJ&amp;hl=zh-CN">Google Scholar <span aria-hidden="true">→</span></a>
    </div>

    <div class="publication-toolbar">
      <div class="publication-filters" data-publication-filters aria-label="Filter publications by topic">
        <button type="button" data-publication-filter="selected" aria-pressed="true">Selected</button>
        <button type="button" data-publication-filter="all" aria-pressed="false">All</button>
        <button type="button" data-publication-filter="rl" aria-pressed="false">Reinforcement Learning</button>
        <button type="button" data-publication-filter="agents" aria-pressed="false">Agents</button>
        <button type="button" data-publication-filter="reasoning" aria-pressed="false">Reasoning</button>
      </div>
      <p class="publication-count"><span data-publication-count>{{ site.data.publications | size }}</span> papers</p>
    </div>
    <p class="section-note">Papers can appear in more than one topic. * denotes equal contribution.</p>

    <ul class="paper-list">
      {% for paper in site.data.publications %}
      <li data-publication-categories="{{ paper.categories | join: ' ' }}">
        <a class="paper-preview" href="{{ paper.pdf }}" aria-label="Read {{ paper.title }}">
        <img src="{{ paper.image }}" alt="Illustration from {{ paper.title }}" loading="lazy">
        </a>
        <div class="paper-details">
          <div class="paper-meta">
            <p class="paper-venue">{{ paper.venue }} · {{ paper.year }}</p>
            {% if paper.recognition %}
            <div class="paper-recognition-group" aria-label="{{ paper.recognition }} at {{ paper.recognition_event | default: paper.venue }}">
              <p class="paper-recognition-event">{{ paper.recognition_event | default: paper.venue }}</p>
              <p class="paper-recognition paper-recognition--{{ paper.recognition_type | default: 'award' }}">
                <span aria-hidden="true">{% if paper.recognition_type == "oral" %}●{% else %}★{% endif %}</span>
                {{ paper.recognition }}
              </p>
            </div>
            {% endif %}
          </div>
          <p class="paper-title">{{ paper.title }}</p>
          <p class="paper-authors">{{ paper.authors }}</p>
          <p class="paper-links">
            <a href="{{ paper.pdf }}">Paper</a>
            {% if paper.code %}<a href="{{ paper.code }}">Code</a>{% endif %}
          </p>
        </div>
      </li>
      {% endfor %}
    </ul>
  </section>

  <section class="academic-about" id="outside-research">
    <h2>Outside Research</h2>
    <p>I enjoy literature, movies, and music.</p>
    <p><strong>Recent favorite books:</strong> <em>Life Ceremony</em> by Sayaka Murata, <em>All the Lovers in the Night</em> by Mieko Kawakami, <em>Satantango</em> by László Krasznahorkai, and <em>The Hunter</em> by Shuang Xuetao.</p>
    <p><strong>Recent favorite films:</strong> <em>Happy as Lazzaro</em> and <em>La Chimera</em> by Alice Rohrwacher, <em>If I Had Legs, I'd Kick You</em> by Mary Bronstein, <em>Kaili Blues</em> by Gan Bi, <em>The Florida Project</em> by Sean Baker, <em>Desert of Namibia</em> by Yoko Yamanaka</p>
    <p><strong>Music:</strong> Billie Eilish, Lana Del Rey, Jude Chiu, and Qing-Feng Wu.</p>
  </section>
</div>

<script src="/assets/js/publication-filter.js" defer></script>
