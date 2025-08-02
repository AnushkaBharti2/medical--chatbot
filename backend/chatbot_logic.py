def get_medical_response(message):
    message = message.lower()

    if "fever" in message:
        return "You might have a fever. Stay hydrated and rest. If high fever lasts more than 3 days, consult a doctor."
    elif "headache" in message:
        return "Headaches can be caused by stress, dehydration, or screen time. Try resting in a quiet, dark room."
    elif "cold" in message:
        return "Cold symptoms usually go away in a few days. Stay warm, drink fluids, and rest well."
    elif "help" in message:
        return "You can ask about fever, headache, cold, or type 'emergency' for urgent advice."
    elif "emergency" in message:
        return "In an emergency, call your local emergency number or go to the nearest hospital immediately."
    else:
        return "Sorry, I don't recognize that symptom. Try asking about fever, cold, or headache."
 
