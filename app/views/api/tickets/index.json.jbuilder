# @tickets.each do |ticket|
#     json.partial! 'api/tickets/ticket', ticket: ticket
# end

json.array! @tickets do |ticket|
    json.partial! 'api/tickets/ticket', ticket: ticket
end