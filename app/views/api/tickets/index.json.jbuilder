@tickets.each |ticket| do 
    json.partial! 'api/tickets/ticket', ticket: ticket
end