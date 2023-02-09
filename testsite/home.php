<?php get_header(); ?>
<section class="top">
    <div class="top__content base-color boxshadow-up boxshadow-white-up">
        <h1 class="top__content--title text-color text-shadow text-shadow-white">Welcome to<br><span class="top__content--title--span">my Portfolio</span></h1>
        <div class="top__content--palette">
            <div class="top__content--palette--title-palette">
                <p class="top__content--palette--title-palette--text text-color">change theme color</p>
            </div>
            <div class="top__content--palette--color-palette">
                <button id="btn-wight" class="top__content--palette--color-palette--text-box button-White-none swich-action">
                    <span id="btn-swich-white" class="top__content--palette--color-palette--text-box--item base-color-violet action"></span>
                    <p class="top__content--palette--color-palette--text-box--text">light</p>
                </button>
                <button id="btn-black" class="top__content--palette--color-palette--text-box button-Black-none">
                    <span id="btn-swich-black" class="top__content--palette--color-palette--text-box--item base-color-orange swich-black"></span>
                    <p class="top__content--palette--color-palette--text-box--text">black</p>
                </button>
                <button id="btn-violet" class="top__content--palette--color-palette--text-box button-Violet-none">
                    <span id="btn-swich-violet" class="top__content--palette--color-palette--text-box--item base-color-white swich-violet"></span>
                    <p class="top__content--palette--color-palette--text-box--text">violet</p>
                </button>
                <button id="btn-orange" class="top__content--palette--color-palette--text-box button-Orange-none">
                    <span id="btn-swich-orange" class="top__content--palette--color-palette--text-box--item base-color-black swich-orange"></span>
                    <p class="top__content--palette--color-palette--text-box--text">orange</p>
                </button>
            </div>
        </div>
    </div>
    <div class="top__cube-content base-color boxshadow-down boxshadow-white-down">
        <div class="cube">
            <div class="cube__box">
                <div class="cube__box--block solid-color solid-color-white">1</div>
                <div class="cube__box--block solid-color solid-color-white">2</div>
                <div class="cube__box--block solid-color solid-color-white">3</div>
                <div class="cube__box--block solid-color solid-color-white">4</div>
                <div class="cube__box--block solid-color solid-color-white">5</div>
                <div class="cube__box--block solid-color solid-color-white">6</div>
            </div>
        </div>
    </div>
</section>

<section class="skill-set base-color boxshadow-up boxshadow-white-up">
    <h2 class="title-box boxshadow-down boxshadow-white-down">
        <span class="title-box__sub-title text-color">skill set</span>
        <span class="title-box__title text-color">スキルセット</span>
    </h2>

    <!-- サイトコーディング -->
    <div class="skill-set__content solid-back solid-color-white-back">
        <h3 class="skill-set__content--title boxshadow-down boxshadow-white-down text-color">サイトコーディング</h3>

        <div class="card-content">
            <!-- 表 -->
            <div id="Click-btn-bem-card-front" class="card-content__front base-color boxshadow-up boxshadow-white-up">
                <h4 class="card-content__front--title text-color">bem記法</h4>
                <span class="card-content__front--label object-color object-color-white">
                    <p class="card-content__front--label--text object-color object-color-white">click</p>
                </span>
                <div class="card-content__front--bideo-content boxshadow-down boxshadow-white-down">
                    <div class="typing-animation">
                        <p id="bem-typing-text" class="bem-typing text-color"></p>
                    </div>
                </div>
            </div>
            <!-- 裏 -->
            <div id="Click-btn-bem-card-behind" class="card-content__behind base-color boxshadow-up boxshadow-white-up">
                <h4 class="card-content__behind--title text-color">bem記法</h4>
                <span class="card-content__front--label object-color object-color-white">
                    <p class="card-content__front--label--text object-color object-color-white">back</p>
                </span>
                <div class="card-content__behind--bideo-content boxshadow-down boxshadow-white-down">
                    <p class="card-content__behind--bideo-content--text text-color">
                        bemを使って効率よくかつ分かりやすいクラス管理をしています。
                        WPのテーマ開発の勉強にも力を入れており、gihubで
                        dockerを使ったWPテーマ開発用のテンプレートなども公開しています。
                    </p>
                </div>
            </div>
        </div>

        <div class="card-content">
            <!-- 表 -->
            <div id="Click-btn-scss-card-front" class="card-content__front base-color boxshadow-up boxshadow-white-up">
                <h4 class="card-content__front--title text-color">scss管理</h4>
                <span class="card-content__front--label object-color object-color-white">
                    <p class="card-content__front--label--text object-color object-color-white">click</p>
                </span>
                <div class="card-content__front--bideo-content boxshadow-down boxshadow-white-down">
                    <div class="typing-animation">
                        <p id="scss-typing-text" class="scss-typing text-color"></p>
                    </div>
                </div>
            </div>
            <!-- 裏 -->
            <div id="Click-btn-scss-card-behind" class="card-content__behind base-color boxshadow-up boxshadow-white-up">
                <h4 class="card-content__behind--title text-color">scss管理</h4>
                <span class="card-content__front--label object-color object-color-white">
                    <p class="card-content__front--label--text object-color object-color-white">back</p>
                </span>
                <div class="card-content__behind--bideo-content boxshadow-down boxshadow-white-down">
                    <!-- ビデオ挿入 -->
                </div>
            </div>
        </div>
    </div>

    <!-- WP開発 -->
    <div class="skill-set__WPcontent">
        <h3 class="skill-set__WPcontent--title boxshadow-down boxshadow-white-down text-color">WP開発</h3>

        <div class="card-content">
            <!-- 表 -->
            <div id="Click-btn-docker-card-front" class="card-content__front base-color boxshadow-up boxshadow-white-up">
                <h4 class="card-content__front--title text-color">docker</h4>
                <span class="card-content__front--label object-color object-color-white">
                    <p class="card-content__front--label--text object-color object-color-white">click</p>
                </span>
                <div class="card-content__front--bideo-content boxshadow-down boxshadow-white-down">
                    <div id="img-docker" class="card-content__front--bideo-content--img-docker docker-img-violet"></div>
                </div>
            </div>
            <!-- 裏 -->
            <div id="Click-btn-docker-card-behind" class="card-content__behind base-color boxshadow-up boxshadow-white-up">
                <h4 class="card-content__behind--title text-color">dockerを使ったローカル開発</h4>
                <div class="card-content__behind--bideo-content boxshadow-down boxshadow-white-down">
                    <div>
                        <!-- ビデオ挿入 -->
                    </div>
                </div>
            </div>
        </div>

        <div class="card-content">
            <!-- 表 -->
            <div id="Click-btn-github-card-front" class="card-content__front base-color boxshadow-up boxshadow-white-up">
                <h4 class="card-content__front--title text-color">Github</h4>
                <span class="card-content__front--label object-color object-color-white">
                    <p class="card-content__front--label--text object-color object-color-white">click</p>
                </span>
                <div class="card-content__front--bideo-content boxshadow-down boxshadow-white-down">
                    <!-- ビデオ挿入 -->
                    <div id="img-github" class="card-content__front--bideo-content--img-github github-img-violet"></div>
                </div>
            </div>
            <!-- 裏 -->
            <div id="Click-btn-github-card-behind" class="card-content__behind base-color boxshadow-up boxshadow-white-up">
                <h4 class="card-content__behind--title text-color">Githubでのコード管理</h4>
                <div class="card-content__behind--bideo-content boxshadow-down boxshadow-white-down">
                    <!-- ビデオ挿入 -->

                </div>
            </div>
        </div>

        <div class="card-content">
            <!-- 表 -->
            <div id="Click-btn-wp-card-front" class="card-content__front base-color boxshadow-up boxshadow-white-up">
                <h4 class="card-content__front--title text-color">WordPress</h4>
                <span class="card-content__front--label object-color object-color-white">
                    <p class="card-content__front--label--text object-color object-color-white">click</p>
                </span>
                <div class="card-content__front--bideo-content boxshadow-down boxshadow-white-down">
                    <!-- ビデオ挿入 -->
                    <div id="img-wp" class="card-content__front--bideo-content--img-wp wp-img-violet "></div>
                </div>
            </div>
            <!-- 裏 -->
            <div id="Click-btn-wp-card-behind" class="card-content__behind base-color boxshadow-up boxshadow-white-up">
                <h4 class="card-content__behind--title text-color">WPで作れる機能</h4>
                <div class="card-content__behind--bideo-content boxshadow-down boxshadow-white-down">
                    <!-- ビデオ挿入 -->

                </div>
            </div>
        </div>

    </div>
</section>

<section class="works base-color boxshadow-up boxshadow-white-up">
    <h2 class="title-box boxshadow-down boxshadow-white-down">
        <span class="title-box__sub-title text-color">works</span>
        <span class="title-box__title text-color">制作物</span>
    </h2>
    
    <div class="slider">
        <div class="slides">
            <div class="slide slide1">Slide 1</div>
            <div class="slide slide2">Slide 2</div>
            <div class="slide slide3">Slide 3</div>
        </div>
    </div>
    <button id="prevBtn">Prev</button>
    <button id="nextBtn">Next</button>

</section>
<?php get_footer(); ?>