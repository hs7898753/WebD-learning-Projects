setInterval(() => {
    dd= new Date();
    htime=dd.getHours();
    mtime=dd.getMinutes();
    stime=dd.getSeconds();

    hrotation=30*htime+ mtime/2;
    minrotation=6*mtime;
    srotation=6*stime;

    hours.style.transform=`rotate(${hrotation}deg)`;
    min.style.transform=`rotate(${minrotation}deg)`;
    seconds.style.transform=`rotate(${srotation}deg)`;

}, 1000);
