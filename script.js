import { maintenanceMode } from './config.js';

// Redirect to maintenance page if active
if (maintenanceMode) {
    window.location.href = "/common/update.html";
}
