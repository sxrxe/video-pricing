// ページ読み込み時の処理
document.addEventListener('DOMContentLoaded', function() {
    console.log('ページが読み込まれました');
    
    // お問い合わせボタンのイベント
    const contactBtn = document.getElementById('contactBtn');
    if (contactBtn) {
        contactBtn.addEventListener('click', handleContact);
    }

    // テーブル行のホバーエフェクト
    initTableRows();

    // スクロール時のアニメーション
    initScrollAnimation();
});

// お問い合わせボタンのクリック処理
function handleContact() {
    // メールアドレスを設定してください
    const email = 'your-email@example.com';
    const subject = '動画制作のお問い合わせ';
    const body = 'お世話になっています。\n\n動画制作に関するお問い合わせです。\n\n';
    
    // メーラーを開く
    window.location.href = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    
    // または、別の方法としてアラートを表示
    // alert('お問い合わせありがとうございます！\nメールアドレス: ' + email);
}

// テーブル行のインタラクション
function initTableRows() {
    const rows = document.querySelectorAll('.pricing-table tbody tr');
    
    rows.forEach(row => {
        row.addEventListener('mouseenter', function() {
            this.style.backgroundColor = '#f0f7ff';
        });
        
        row.addEventListener('mouseleave', function() {
            this.style.backgroundColor = '';
        });

        row.addEventListener('click', function() {
            const cells = this.querySelectorAll('td');
            if (cells.length > 0) {
                const content = Array.from(cells)
                    .map(cell => cell.textContent.trim())
                    .join(' / ');
                console.log('選択されたアイテム:', content);
            }
        });
    });
}

// スクロール時のアニメーション
function initScrollAnimation() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    document.querySelectorAll('.section, .highlight, .notes-section').forEach(el => {
        observer.observe(el);
    });
}

// ページ上部へスクロール関数
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

// 料金計算ヘルパー関数
function calculatePrice(basePrice, quantity) {
    return basePrice * quantity;
}

// 金額のフォーマット関数
function formatPrice(amount) {
    return new Intl.NumberFormat('ja-JP', {
        style: 'currency',
        currency: 'JPY',
        minimumFractionDigits: 0,
        maximumFractionDigits: 0
    }).format(amount);
}

// コンソール出力テスト
console.log('script.js が正しく読み込まれました');
console.log('利用可能な関数:', {
    handleContact: 'お問い合わせ処理',
    scrollToTop: 'ページ上部へスクロール',
    calculatePrice: '料金計算',
    formatPrice: '金額フォーマット'
});