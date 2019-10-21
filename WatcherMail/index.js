const notifier = require('mail-notifier');

var imap = {
    user: 'lapukdee@gmail.com',
    password: 'zupohwahmqeticah',
    host: 'imap.gmail.com',
    port: 993,
    tls: true
};

const n = notifier(imap);
n.on('end', () => n.start())
    .on('mail', mail => {
        // address filter
        if (mail.from[0].address == 'lapukdee@gmail.com') {
            if (mail.subject.includes('การลงทะเบียนจากลูกค้าท่านใหม่')) { // xm partners program

                console.log('IB Incomming from : XM Partners Program');

                startIdx = mail.text.indexOf('*MT4 ID*:');
                if (startIdx != -1) {
                    startIdx = startIdx + 10;
                    endIdx = mail.text.indexOf('ได้ทำการลงทะเบียนเปิดบัญชีเทรดจริงภายใต้บัญชีพันธมิตรของท่านเป็นที่เรียบร้อยแล้ว');
                    ibIncomming = mail.text.substring(startIdx, endIdx);
                    ibIncomming.replace(' ', '');
                    console.log('Account number:', ibIncomming);
                } else console.error('ไม่พบจดหมาย');
            } else if (mail.subject.includes('New Live Account Registration')) { // ic markets

                console.log('IB Incomming from : ICMarkets Partners Program');

                startIdx = mail.text.indexOf('*Name:*');
                if (startIdx != -1) {
                    startIdx = startIdx + 8;
                    endIdx = mail.text.indexOf('We thank you for partnering with IC Markets.');
                    ibIncomming = mail.text.substring(startIdx, endIdx);
                    console.log(ibIncomming);
                    ibName = ibIncomming.split(' ');
                    ibName[0].replace(' ', '');
                    ibName[1].replace(' ', '');
                    console.log('First name:', ibName[0]);
                    console.log('Last name:', ibName[1]);
                } else console.error('ไม่พบจดหมาย');
            }
        }

        if (mail.from[0].address == 'bonusnph@gmail.com') {
            console.log(mail.subject);
        }
    })
    .start();
