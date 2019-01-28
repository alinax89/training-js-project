window.addEventListener('DOMContentLoaded', function () {
        'use strict';

        // ========== TABS ========== //

        let tab = document.querySelectorAll('.info-header-tab'),
            info = document.querySelector('.info-header'),
            tabContent = document.querySelectorAll('.info-tabcontent');

        function hideTabContent(a) {
            for (let i = a; i < tabContent.length; i++) {
                tabContent[i].classList.remove('show');
                tabContent[i].classList.add('hide');
            }
        }

        hideTabContent(1);

        function showContent(b) {
            if (tabContent[b].classList.contains('hide')) {
                tabContent[b].classList.remove('hide');
                tabContent[b].classList.add('show');
            }
        }

        info.addEventListener('click', function (e) {
            let target = e.target;
            if (target && target.classList.contains('info-header-tab')) {
                for (let i = 0; i < tab.length; i++) {
                    if (target === tab[i]) {
                        hideTabContent(0);
                        showContent(i);
                        break;
                    }
                }
            }
        })

        // ========== TIMER ========== //

        let deadLine = '2019-12-31';

        function getTimeRemaining(endTime) {
            let t = Date.parse(endTime) - Date.parse(new Date()),
                seconds = Math.floor((t / 1000) % 60),
                minutes = Math.floor((t / 1000 / 60) % 60),
                hours = Math.floor((t / 1000 / 60 / 60)),
                days = Math.floor((t / 1000 / 60 / 60 / 24));
            days = days < 10 ? '0' + days : days;
            hours = hours < 10 ? '0' + hours : hours;
            minutes = minutes < 10 ? '0' + minutes : minutes;
            seconds = seconds < 10 ? '0' + seconds : seconds;

            return {
                'total': t,
                'days': days,
                'hours': hours,
                'minutes': minutes,
                'seconds': seconds
            };
        }

        function setClock(id, endTime) {
            let timer = document.getElementById(id),
                days = timer.querySelector('.days'),
                hours = timer.querySelector('.hours'),
                minutes = timer.querySelector('.minutes'),
                seconds = timer.querySelector('.seconds'),
                timeInterval = setInterval(updateClock, 1000);

            function updateClock() {
                let t = getTimeRemaining(endTime);

                days.textContent = t.days;
                hours.textContent = t.hours;
                minutes.textContent = t.minutes;
                seconds.textContent = t.seconds;

                if (t.total <= 0) {
                    clearInterval(timeInterval);
                    days.textContent = '00';
                    hours.textContent = '00';
                    minutes.textContent = '00';
                    seconds.textContent = '00';
                }
            }
        }

        setClock('timer', deadLine);
    }
);