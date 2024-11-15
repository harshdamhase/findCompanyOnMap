document.addEventListener('DOMContentLoaded', function () {
    // Check if the copyright notice has been shown
    if (!localStorage.getItem('copyrightShown')) {
        // Copyright notice dialog content
        var copyrightDialogHTML = `
            <div id="copyrightDialog" class="copyright-dialog">
                <div class="dialog-content">
                    <p class="copyright">© 2024 Ishwar Mhase. All rights reserved.</p>
                    <p>This website and its content are protected by copyright law. No part of this website may be reproduced, distributed, or transmitted in any form or by any means, including photocopying, recording, or other electronic or mechanical methods, without the prior written permission of the copyright owner, except in the case of brief quotations embodied in critical reviews and certain other noncommercial uses permitted by copyright law. For permission requests, please contact the website owner.</p>
                    <p>Any attempt to copy, reproduce, or imitate the design, structure, or content of this website is strictly prohibited and may be subject to legal action under applicable laws, including Maharashtra government regulations.</p>
                    <p>Trademarks mentioned or displayed on this website are the property of their respective owners.</p>
                    <p>Violations of this copyright notice may result in legal consequences.</p>
                </div>
                <button id="closeDialog">Close</button>
            </div>
        `;

        // Add the dialog to the body
        document.body.insertAdjacentHTML('afterbegin', copyrightDialogHTML);

        // Close dialog button event
        var closeDialogButton = document.getElementById('closeDialog');
        closeDialogButton.addEventListener('click', function () {
            var copyrightDialog = document.getElementById('copyrightDialog');
            copyrightDialog.style.display = 'none';

            // Set a flag indicating that the copyright notice has been shown
            localStorage.setItem('copyrightShown', 'true');
        });

        // Display the dialog
        var copyrightDialog = document.getElementById('copyrightDialog');
        copyrightDialog.style.display = 'block';
    }
});
