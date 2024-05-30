document.addEventListener('DOMContentLoaded', function() {
    let guests = [];

    function updateGuestList() {
        const guestList = document.getElementById('guestList');
        guestList.innerHTML = '';
        guests.forEach((guest, index) => {
            const li = document.createElement('li');
            li.textContent = `${guest.name} - ${guest.phone}`;
            
            const removeButton = document.createElement('button');
            removeButton.textContent = 'Remover';
            removeButton.className = 'remove-button';
            removeButton.addEventListener('click', function() {
                guests.splice(index, 1);
                updateGuestList();
            });

            li.appendChild(removeButton);
            guestList.appendChild(li);
        });
    }

    function mask(o, f) {
        setTimeout(function() {
            var v = f(o.value);
            if (v != o.value) {
                o.value = v;
            }
        }, 1);
    }

    function phoneMask(v) {
        var r = v.replace(/\D/g, "");
        r = r.replace(/^0/, "");
        if (r.length > 10) {
            // 11 digits. Format as (xx) xxxxx-xxxx
            r = r.replace(/^(\d{2})(\d{5})(\d{4}).*/, "($1) $2-$3");
        } else if (r.length > 5) {
            // 6-10 digits. Format as (xx) xxxx-xxxx
            r = r.replace(/^(\d{2})(\d{4})(\d{0,4}).*/, "($1) $2-$3");
        } else if (r.length > 2) {
            // 3-5 digits. Format as (xx) xxxx
            r = r.replace(/^(\d{2})(\d{0,5})/, "($1) $2");
        } else {
            // 0-2 digits. Format as (xx
            r = r.replace(/^(\d{0,2})/, "($1");
        }
        return r;
    }

    document.getElementById('phone').addEventListener('input', function() {
        mask(this, phoneMask);
    });

    document.getElementById('guestForm').addEventListener('submit', function(event) {
        event.preventDefault();
        const guestName = document.getElementById('name').value.trim();
        const guestPhone = document.getElementById('phone').value.trim();
        if (guestName && guestPhone) {
            guests.push({ name: guestName, phone: guestPhone });
            document.getElementById('name').value = '';
            document.getElementById('phone').value = '';
            updateGuestList();
        }
    });

    document.getElementById('showGuests').addEventListener('click', function() {
        const guestList = document.getElementById('guestList');
        if (guestList.style.display === 'none' || guestList.style.display === '') {
            guestList.style.display = 'block';
        } else {
            guestList.style.display = 'none';
        }
    });
});
