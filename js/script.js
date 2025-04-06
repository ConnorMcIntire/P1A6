
function showSuccessMessage(event) {
    event.preventDefault(); 
    document.getElementById('successModal').classList.remove('hidden'); 
    document.getElementById('rideForm').reset(); 
  }
  
  
  function closeSuccessModal() {
    document.getElementById('successModal').classList.add('hidden'); 
  }

  document.getElementById('editPrescriptionsBtn').addEventListener('click', function() {
    document.getElementById('editPrescriptionModal').classList.remove('hidden'); 
  });